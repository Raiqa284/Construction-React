import { useState } from "react";
import { signOut } from "firebase/auth"; // NEW: import signOut from Firebase
import { auth } from "./Firebase"; // NEW: import auth so we know which user to log out
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate(); // NEW: allows us to redirect the user after logout

  // NEW: logs the admin out of Firebase and sends them back to the login page
  async function handleLogout() {
    await signOut(auth);
    navigate("/admin");
  }

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
      {/* NEW: header row with title on the left and logout button on the right */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout}>Logout</button> {/* NEW: logout button */}
      </div>

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