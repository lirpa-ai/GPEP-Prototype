"use client";
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function ProductsPage() {

    const [productName, setProductName] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [products, setProducts] = useState<any[]>([]);
    useEffect(() => {
    loadProducts();
    }, []);
    const loadProducts = async () => {
    const snapshot = await getDocs(collection(db, "products"));

    const productData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    setProducts(productData);
    };
    const handleSaveProduct = async () => {
    try {
        await addDoc(collection(db, "products"), {
        productName,
        brand,
        category,
        price,
        description,
        });

        loadProducts();
        alert("Product saved successfully!");
    } catch (error) {
        console.error(error);
        alert("Error saving product.");
    }
    };

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-8">
        Products & Services
      </h1>

      <div className="max-w-2xl space-y-4">

        <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        className="w-full border p-3 rounded"
        />

        <input
        type="text"
        placeholder="Brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        className="w-full border p-3 rounded"
        />

        <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border p-3 rounded"
        />

        <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full border p-3 rounded"
        />

        <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border p-3 rounded"
        rows={4}
        />

<button
  onClick={handleSaveProduct}
  className="bg-black text-white px-4 py-2 rounded"
>
          Save Product
        </button>

      </div>
      <div className="mt-10">
  <h2 className="text-2xl font-bold mb-4">
    Saved Products
  </h2>

  {products.map((product) => (
    <div
      key={product.id}
      className="border p-4 rounded mb-4"
    >
      <h3 className="font-bold text-lg">
        {product.productName}
      </h3>

      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <p>Price: R {product.price}</p>
      <p>{product.description}</p>
    </div>
  ))}
</div>
    </main>
  );
}