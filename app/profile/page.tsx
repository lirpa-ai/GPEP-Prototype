"use client";

import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { collection, 
         addDoc,
         getDocs
        } from "firebase/firestore";
export default function ProfilePage() {
  const [companyName, setCompanyName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [taxNumber, setTaxNumber] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
 
  useEffect(() => {
       loadProfile();
  }, []);

  const loadProfile = async () => {
  const snapshot = await getDocs(collection(db, "suppliers"));

  if (!snapshot.empty) {
    const data = snapshot.docs[0].data();

    setCompanyName(data.companyName || "");
    setRegistrationNumber(data.registrationNumber || "");
    setTaxNumber(data.taxNumber || "");
    setContactPerson(data.contactPerson || "");
    setEmail(data.email || "");
    setPhoneNumber(data.phoneNumber || "");
    setAddress(data.address || "");
    }
  };

  const handleSaveProfile = async () => {
  try {
    await addDoc(collection(db, "suppliers"), {
      companyName,
      registrationNumber,
      taxNumber,
      contactPerson,
      email,
      phoneNumber,
      address,
    });

    alert("Profile saved successfully!");
  } catch (error) {
    console.error(error);
    alert("Error saving profile.");
  }
};
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-8">
        Supplier Profile
      </h1>

      <div className="max-w-2xl space-y-4">

        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="w-full border p-3 rounded"
        />
        <input
          type="text"
          placeholder="Registration Number"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          placeholder="Tax Number"
          value={taxNumber}
          onChange={(e) => setTaxNumber(e.target.value)}         
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          placeholder="Contact Person"
          value={contactPerson}
          onChange={(e) => setContactPerson(e.target.value)}
          className="w-full border p-3 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full border p-3 rounded"
        />

        <textarea
          placeholder="Physical Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border p-3 rounded"
          rows={4}
        />

        <button
          onClick={handleSaveProfile}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Save Profile
        </button>

      </div>
    </main>
  );
}