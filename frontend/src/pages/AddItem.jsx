import React, { useState } from "react";
import { uploadImage, createItem } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function AddItem() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("electronics");
  const [condition, setCondition] = useState("Good");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!name || !file) {
      alert("Please provide name and an image file.");
      return;
    }

    try {
      setUploading(true);
      // 1) Upload the image file
      const uploadRes = await uploadImage(file); // returns { imageUrl }
      const imageUrl = uploadRes.imageUrl || uploadRes?.data?.imageUrl;
      if (!imageUrl) throw new Error("Upload did not return imageUrl");

      // 2) Create item
      const item = {
        name,
        description,
        category,
        condition,
        imageUrl
      };
      await createItem(item);

      alert("Item added successfully");
      navigate("/"); // go to home
    } catch (err) {
      console.error("AddItem error:", err);
      alert("Failed to add item. See console for details.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6 text-brand">Add a New Item</h2>
      <form onSubmit={onSubmit} className="bg-white p-6 rounded-lg shadow">
        <label className="block mb-3">
          <span className="text-sm font-medium">Name</span>
          <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full rounded-md border px-3 py-2" />
        </label>

        <label className="block mb-3">
          <span className="text-sm font-medium">Description</span>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="mt-1 block w-full rounded-md border px-3 py-2" />
        </label>

        <label className="block mb-3">
          <span className="text-sm font-medium">Category</span>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 block w-full rounded-md border px-3 py-2">
            <option value="electronics">Electronics</option>
            <option value="books">Books</option>
            <option value="cloths">Cloths</option>
          </select>
        </label>

        <label className="block mb-3">
          <span className="text-sm font-medium">Condition</span>
          <select value={condition} onChange={(e) => setCondition(e.target.value)} className="mt-1 block w-full rounded-md border px-3 py-2">
            <option>New</option>
            <option>Good</option>
            <option>Fair</option>
            <option>Used</option>
          </select>
        </label>

        <label className="block mb-4">
          <span className="text-sm font-medium">Image</span>
          <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} className="mt-1 block w-full" />
        </label>

        <div className="flex items-center gap-4">
          <button type="submit" className="px-4 py-2 bg-brand text-white rounded" disabled={uploading}>
            {uploading ? "Uploading..." : "Add Item"}
          </button>
          <button type="button" onClick={() => { setName(""); setDescription(""); setFile(null); }} className="px-4 py-2 border rounded">Reset</button>
        </div>
      </form>
    </div>
  );
}
