"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function DashboardPage() {
  const [userEmail, setUserEmail] = useState("");

    const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
        setUserEmail(user.email || "");
        } else {
        router.push("/login");
        }
    });

    return () => unsubscribe();
  }, []);

    const handleLogout = async () => {
        await signOut(auth);
    };

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-4">
        Supplier Dashboard
      </h1>

      <p className="text-lg mb-2">
        Welcome to the GPEP Supplier Portal.
      </p>

      <p className="mb-10 text-gray-600">
        Logged in as: {userEmail}
      </p>

        <button
            onClick={handleLogout}
            className="bg-black text-white px-4 py-2 rounded mb-10">
            Logout
        </button>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/profile">
            <div className="border rounded-lg p-6 cursor-pointer hover:bg-gray-50">
                <h2 className="font-bold text-xl mb-2">
                Company Profile
                </h2>
                <p>
                Manage supplier information and business details.
                </p>
            </div>
            </Link>

      <Link href="/compliance">
        <div className="border rounded-lg p-6 cursor-pointer hover:bg-gray-50">
          <h2 className="font-bold text-xl mb-2">
            Compliance Documents
          </h2>
          <p>
            Upload and maintain regulatory documentation.
          </p>
        </div>
      </Link>

      <Link href="/products">
        <div className="border rounded-lg p-6 cursor-pointer hover:bg-gray-50">
          <h2 className="font-bold text-xl mb-2">
            Products & Services
          </h2>
          <p>
            Manage your catalog of products and services.
          </p>
        </div>
      </Link>
      <Link href="/tenders">
        <div className="border rounded-lg p-6 cursor-pointer hover:bg-gray-50">
          <h2 className="font-bold text-xl mb-2">
            Tender Opportunities
          </h2>
          <p>
            View procurement requests and bidding opportunities.
          </p>
        </div>
      </Link>
      </div>
    </main>
  );
}