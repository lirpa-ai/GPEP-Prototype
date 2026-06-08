import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      <header className="flex justify-between items-center p-6 border-b">
        <h1 className="text-2xl font-bold">GPEP</h1>

          <nav className="flex gap-4 items-center">
            <Link href="/about">
              About
            </Link>

            <Link href="/enterprise-buyers">
              Enterprise Buyers
            </Link>
 
            <Link href="/how-it-works">
              How It Works
            </Link>

            <button className="px-4 py-2 border rounded">
              Login
            </button>

            <button className="px-4 py-2 bg-black text-white rounded">
              Register
            </button>
          </nav>
      </header>

      <section className="text-center py-24 px-6">
        <h2 className="text-5xl font-bold mb-6">
          Supporting procurement excellence
        </h2>

        <p className="text-xl max-w-3xl mx-auto mb-10">
          Across government, enterprise, and institutional sectors.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-black text-white rounded">
            Register as Supplier
          </button>

          <button className="px-6 py-3 border rounded">
            Learn More
          </button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 px-10 pb-20">
        <div className="border rounded-lg p-6">
          <h3 className="font-bold mb-2">
            Verified Suppliers
          </h3>

          <p>
            Supplier profiles validated before participation.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="font-bold mb-2">
            Transparent Procurement
          </h3>

          <p>
            Clear procurement processes and accountability.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="font-bold mb-2">
            Secure Digital Workflows
          </h3>

          <p>
            Modern tools supporting compliant procurement.
          </p>
        </div>
      </section>

    </main>
  );
}