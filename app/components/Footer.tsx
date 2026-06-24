import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-green-950 text-green-100">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-yellow-400 mb-4">
              Treadstone Trading
            </h3>

            <p className="text-sm leading-relaxed">
              Technology procurement solutions delivering ICT hardware,
              managed print services, software licensing and office
              equipment solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-yellow-400 mb-4">
              Quick Links
            </h3>

            <nav className="flex flex-col gap-3 text-sm">
              <Link href="/" className="hover:text-yellow-300">
                Home
              </Link>

              <Link href="/products" className="hover:text-yellow-300">
                Products
              </Link>

              <Link href="/about" className="hover:text-yellow-300">
                About
              </Link>

              <Link href="/contact" className="hover:text-yellow-300">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-bold text-yellow-400 mb-4">
              Legal
            </h3>

            <nav className="flex flex-col gap-3 text-sm">
              <Link href="/privacy-policy" className="hover:text-yellow-300">
                Privacy Policy
              </Link>

              <Link href="/terms" className="hover:text-yellow-300">
                Terms & Conditions
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-green-800 mt-10 pt-6 text-center text-sm text-green-200">
          © 2026 Treadstone Trading. All rights reserved.
        </div>
      </div>
    </footer>
  );
}