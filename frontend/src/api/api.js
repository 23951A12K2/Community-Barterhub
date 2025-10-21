import axios from "axios";

const API_BASE = "http://localhost:9096"; // adapt if your backend URL differs

export async function fetchAllProducts() {
  const res = await axios.get(`${API_BASE}/items`);
  return res.data;
}

export async function fetchProductsByCategory(category) {
  // backend: GET /items?category=electronics
  const res = await axios.get(`${API_BASE}/items`, {
    params: { category }
  });
  return res.data;
}

export async function uploadImage(file) {
  const fd = new FormData();
  fd.append("file", file);
  const res = await axios.post(`${API_BASE}/upload`, fd, {
    headers: { "Content-Type": "multipart/form-data" }
  });
  // expects { imageUrl: "http://..." }
  return res.data;
}

export async function createItem(item) {
  const res = await axios.post(`${API_BASE}/items`, item, {
    headers: { "Content-Type": "application/json" }
  });
  return res.data;
}
