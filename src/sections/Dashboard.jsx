import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { auth, db } from "./Firebase";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [savedImages, setSavedImages] = useState([]);
  const navigate = useNavigate();

  async function loadImages() {
    try {
      const q = query(
        collection(db, "images"),
        orderBy("createdAt", "desc"),
        limit(50)
      );
      const snapshot = await getDocs(q);
      setSavedImages(
        snapshot.docs.map((d) => ({ id: d.id, url: d.data().url }))
      );
    } catch (error) {
      console.error("Could not load images:", error);
    }
  }

  useEffect(() => {
    loadImages();
  }, []);

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

      if (!data.secure_url) {
        throw new Error(data.error?.message || "Cloudinary returned no URL");
      }

      await addDoc(collection(db, "images"), {
        url: data.secure_url,
        createdAt: Date.now(),
      });

      alert("Image uploaded successfully!");
      await loadImages();
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    }
    setUploading(false);
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this image from the website?")) return;
    try {
      await deleteDoc(doc(db, "images", id));
      setSavedImages(savedImages.filter((img) => img.id !== id));
    } catch (error) {
      console.error(error);
      alert("Delete failed");
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
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

      <h2>Uploaded images</h2>
      {savedImages.length === 0 && <p>No uploaded images yet.</p>}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {savedImages.map((img) => (
          <div key={img.id} style={{ width: "160px" }}>
            <img
              src={img.url.replace("/upload/", "/upload/w_200,q_auto,f_auto/")}
              alt="Uploaded project"
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <button onClick={() => handleDelete(img.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;