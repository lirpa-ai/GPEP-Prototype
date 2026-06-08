export default function HowItWorksPage() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-6">
        How It Works
      </h1>

      <div className="space-y-6 max-w-4xl">
        <div>
          <h2 className="text-2xl font-semibold">
            1. Supplier Registration
          </h2>
          <p>
            Suppliers create accounts and submit company information.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            2. Verification & Compliance
          </h2>
          <p>
            Supplier information is reviewed and validated before participation.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            3. Product & Service Listings
          </h2>
          <p>
            Approved suppliers publish products and service offerings.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            4. Procurement Requests
          </h2>
          <p>
            Buyers browse suppliers, products, and procurement opportunities.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            5. Secure Transactions
          </h2>
          <p>
            Orders, communications, and records are maintained securely.
          </p>
        </div>
      </div>
    </main>
  );
}