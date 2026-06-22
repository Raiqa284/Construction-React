import { useState } from "react";

function Dashboard() {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  async function handleUpload() {
    if (!image) {
      alert("Please select an image first");
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "construction_uploads");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/ddny1va8b/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      console.log("Uploaded image URL:", data.secure_url);

      alert("Image uploaded successfully!");
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    }

    setUploading(false);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>

      <p>Upload new project image below:</p>

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <br /><br />

      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload Image"}
      </button>

      <br /><br />

      {image && (
        <p>Selected file: {image.name}</p>
      )}
    </div>
  );
}

export default Dashboard;