import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
  <header className="border-b border-gray-200 shadow-sm">
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/images/treadstonetrading_logo.png"
            alt="Treadstone Trading"
            width={55}
            height={55}
          />
          <Link
            href="/"
            className="text-xl font-bold"
          >
            Treadstone Trading
          </Link>
        </div>

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