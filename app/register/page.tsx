"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";

export default function RegisterPage() {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [message, setMessage] = useState("");

        const handleRegister = async (e: any) => {
            e.preventDefault();

            try {
            await createUserWithEmailAndPassword(
            auth,
            email,
            password
            );

                setMessage("Registration successful!");
            } catch (error: any) {
                setMessage(error.message);
            }
        };
   
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md border rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6">
          Supplier Registration
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Company Name"
            className="w-full border p-3 rounded"
          />

            <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 rounded"
            />

            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded"
            />

            <button
             onClick={handleRegister}
            className="w-full bg-black text-white p-3 rounded"
            >
            Register
            </button>
            <p className="text-center mt-4">
                {message}
                </p>    
        </form>
      </div>
    </main>
  );
}