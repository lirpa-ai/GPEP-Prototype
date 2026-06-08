"use client";

import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
export default function TendersPage() {
  const [tenderTitle, setTenderTitle] = useState("");
  const [referenceNumber, setReferenceNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [closingDate, setClosingDate] = useState("");
  const [description, setDescription] = useState("");
  const [tenders, setTenders] = useState<any[]>([]);
    useEffect(() => {
    loadTenders();
    }, []);

    const loadTenders = async () => {
    const snapshot = await getDocs(collection(db, "tenders"));

    const tenderData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    setTenders(tenderData);
    };
  const handleSaveTender = async () => {
    try {
      await addDoc(collection(db, "tenders"), {
        tenderTitle,
        referenceNumber,
        department,
        closingDate,
        description,
      });

      alert("Tender saved successfully!");
      loadTenders();
    } catch (error) {
      console.error(error);
      alert("Error saving tender.");
    }
  };

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-8">
        Tender Opportunities
      </h1>

      <div className="max-w-2xl space-y-4">

        <input
          type="text"
          placeholder="Tender Title"
          value={tenderTitle}
          onChange={(e) => setTenderTitle(e.target.value)}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          placeholder="Reference Number"
          value={referenceNumber}
          onChange={(e) => setReferenceNumber(e.target.value)}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          placeholder="Department / Organisation"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="w-full border p-3 rounded"
        />

        <input
          type="date"
          value={closingDate}
          onChange={(e) => setClosingDate(e.target.value)}
          className="w-full border p-3 rounded"
        />

        <textarea
          placeholder="Tender Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-3 rounded"
          rows={4}
        />

        <button
          onClick={handleSaveTender}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Save Tender
        </button>

        <h2 className="text-2xl font-bold mt-10 mb-4">
        Saved Tenders
        </h2>

        <div className="space-y-4">
        {tenders.map((tender) => (
            <div
            key={tender.id}
            className="border p-4 rounded"
            >
            <h3 className="font-bold text-xl">
                {tender.tenderTitle}
            </h3>

            <p>
                Reference: {tender.referenceNumber}
            </p>

            <p>
                Organisation: {tender.department}
            </p>

            <p>
                Closing Date: {tender.closingDate}
            </p>

            <p className="mt-2">
                {tender.description}
            </p>
            </div>
        ))}
        </div>   
      </div>
    </main>
  );
}