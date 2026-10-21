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
      setImage(null);
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
    <div className="min-h-screen bg-black text-white">
      <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
        <h1 className="text-xl font-bold uppercase">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white rounded-full px-5 py-2 transition"
        >
          Logout
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-10">
          <p className="text-pink-500 uppercase text-sm tracking-widest mb-4">
            Upload new project image
          </p>

          <input
            key={uploading ? "uploading" : "idle"}
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="text-zinc-300 file:mr-4 file:rounded-full file:border-0 file:bg-pink-500 file:px-4 file:py-2 file:text-white hover:file:bg-pink-600"
          />

          {image && (
            <p className="text-zinc-400 text-sm mt-3">
              Selected file: {image.name}
            </p>
          )}

          <button
            onClick={handleUpload}
            disabled={uploading}
            className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full px-8 py-3 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {uploading ? "Uploading..." : "Upload Image"}
          </button>
        </div>

        <h2 className="text-white text-2xl font-bold uppercase mb-6">
          Uploaded images ({savedImages.length})
        </h2>

        {savedImages.length === 0 && (
          <p className="text-zinc-500">No uploaded images yet.</p>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {savedImages.map((img) => (
            <div
              key={img.id}
              className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden"
            >
              <img
                src={img.url.replace("/upload/", "/upload/w_400,q_auto,f_auto/")}
                alt="Uploaded project"
                className="w-full h-40 object-cover"
              />
              <button
                onClick={() => handleDelete(img.id)}
                className="w-full py-2 text-sm text-red-400 hover:bg-red-500 hover:text-white transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;