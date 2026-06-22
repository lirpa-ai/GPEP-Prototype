import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-100">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-orange-400 mb-4">
              Remotlotlo Group
            </h3>

            <p className="text-sm leading-relaxed">
              Technology procurement solutions supporting ICT hardware,
              managed print services, software licensing and office
              equipment requirements.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-orange-400 mb-4">
              Quick Links
            </h3>

            <nav className="flex flex-col gap-3 text-sm">
              <Link href="/" className="hover:text-orange-300">Home</Link>
              <Link href="/products" className="hover:text-orange-300">Products</Link>
              <Link href="/about" className="hover:text-orange-300">About</Link>
              <Link href="/contact" className="hover:text-orange-300">Contact</Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-bold text-orange-400 mb-4">
              Legal
            </h3>

            <nav className="flex flex-col gap-3 text-sm">
              <Link href="/privacy-policy" className="hover:text-orange-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-orange-300">
                Terms & Conditions
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-10 pt-6 text-center text-sm text-blue-200">
          © 2026 Remotlotlo Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}