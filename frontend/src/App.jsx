import { useState, useEffect } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState("");
  const [gallery, setGallery] = useState("");
  const [price, setPrice] = useState("");
  const [sale_price, setSalePrice] = useState("");
  const [variations, setVariations] = useState("");

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:4000/api/v1/products/");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      description,
      slug,
      image,
      gallery: gallery.split(","),
      price: parseFloat(price),
      sale_price: parseFloat(sale_price),
      variations: variations.split(","),
    };

    const response = await fetch(
      "http://localhost:4000/api/v1/products/addProduct",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      }
    );

    const data = await response.json();
    setProducts([...products, data]);
    setName("");
    setDescription("");
    setSlug("");
    setImage("");
    setGallery("");
    setPrice("");
    setSalePrice("");
    setVariations("");
  };

  return (
    <div>
      <h1>Add a new product</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label htmlFor="slug">Slug:</label>
        <input
          type="text"
          id="slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          required
        />
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <label htmlFor="gallery">Gallery (comma-separated):</label>
        <input
          type="text"
          id="gallery"
          value={gallery}
          onChange={(e) => setGallery(e.target.value)}
          required
        />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          step="0.01"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <label htmlFor="sale_price">Sale Price:</label>
        <input
          type="number"
          step="0.01"
          id="sale_price"
          value={sale_price}
          onChange={(e) => setSalePrice(e.target.value)}
          required
        />
        <label htmlFor="variations">Variations (comma-separated):</label>
        <input
          type="text"
          id="variations"
          value={variations}
          onChange={(e) => setVariations(e.target.value)}
          required
        />
        <button type="submit">Add Product</button>
      </form>
      <h2>All products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
