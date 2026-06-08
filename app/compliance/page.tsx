export default function CompliancePage() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-8">
        Compliance Documents
      </h1>

      <div className="max-w-2xl space-y-4">
        <input
          type="file"
          className="w-full border p-3 rounded"
        />

        <button
          className="bg-black text-white px-4 py-2 rounded"
        >
          Upload Document
        </button>
      </div>
    </main>
  );
}