import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          href="/"
          className="text-xl font-bold"
        >
          Remotlotlo Group
        </Link>

        <nav className="flex gap-6 items-center">
          <Link href="/" className="hover:underline">
            Home
          </Link>

          <Link href="/products" className="hover:underline">
            Products
          </Link>

          <Link href="/about" className="hover:underline">
            About
          </Link>

          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}