import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
<main className="min-h-screen bg-white">

      <header className="flex justify-between items-center p-6 border-b">
          <div className="flex items-center">
            <Image
              src="/images/treadstonetrading_logo.png"
              alt="Treadstone Trading"
              width={60}
              height={60}
            />
            <h1 className="text-3xl font-bold mb-4">
              Treadstone Trading
            </h1>          
          </div>

      </header>

<section className="text-center py-24 px-6 bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white">

<h2 className="text-5xl font-bold mb-6 text-white">
      ICT Hardware, Office Equipment & Procurement Solutions
    </h2>

        <p className="text-xl max-w-4xl mx-auto mb-10 text-gray-100">
          Delivering technology products, managed print services,
          software licensing and office equipment solutions for
          government departments, municipalities and corporate organisations.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/products"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded"
          >
            Browse Products
          </Link>

          <Link
            href="/contact"
            className="border border-white text-white px-8 py-3 rounded hover:bg-white hover:text-green-900"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-16">
          <div className="border rounded-lg p-6 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
            <h3 className="font-bold mb-2">
              ICT Hardware
            </h3>

            <p>
              Laptops, desktops, workstations and accessories from leading technology brands.
            </p>
          </div>

          <div className="border rounded-lg p-6 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
            <h3 className="font-bold mb-2">
              Managed Print Services
            </h3>

            <p>
              Professional print fleet management, maintenance and consumables supply.
            </p>
          </div>

          <div className="border rounded-lg p-6 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
          <h3 className="font-bold mb-2">
            Office Equipment
          </h3>

          <p>
            Projectors, presentation systems, conferencing equipment and office solutions.
          </p>
          </div>
      </div>
      </section>

        <section className="max-w-6xl mx-auto py-16 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Trusted Technology Brands
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="border rounded-lg px-6 py-3">Dell</div>
            <div className="border rounded-lg px-6 py-3">Lenovo</div>
            <div className="border rounded-lg px-6 py-3">HP</div>
            <div className="border rounded-lg px-6 py-3">Microsoft</div>
            <div className="border rounded-lg px-6 py-3">Epson</div>
            <div className="border rounded-lg px-6 py-3">Canon</div>
            <div className="border rounded-lg px-6 py-3">Logitech</div>
            <div className="border rounded-lg px-6 py-3">Parrot</div>
          </div>
        </section>


      <section className="max-w-7xl mx-auto px-16 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border rounded-lg p-4">
            <Image
              src="/images/products/dell-latitude-5550.jpg"
              alt="Dell Latitude 5550"
              width={400}
              height={250}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="font-bold text-lg">Dell Latitude 5550</h3>
            <p className="text-sm text-gray-600">Business Laptop</p>
          </div>

          <div className="border rounded-lg p-4">
            <Image
              src="/images/products/lenovo-thinkpad-e16.webp"
              alt="Lenovo ThinkPad E16"
              width={400}
              height={250}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="font-bold text-lg">Lenovo ThinkPad E16</h3>
            <p className="text-sm text-gray-600">Professional Laptop</p>
          </div>

          <div className="border rounded-lg p-4">
            <Image
              src="/images/products/logitech-mk540.jpg"
              alt="Logitech MK540"
              width={400}
              height={250}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="font-bold text-lg">Logitech MK540</h3>
            <p className="text-sm text-gray-600">Keyboard & Mouse Combo</p>
          </div>

          <div className="border rounded-lg p-4">
            <Image
              src="/images/products/epson-l6570.jpg"
              alt="Epson L6570"
              width={400}
              height={250}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="font-bold text-lg">Epson EcoTank L6570</h3>
            <p className="text-sm text-gray-600">Business Printer</p>
          </div>

          <div className="border rounded-lg p-4">
            <Image
              src="/images/products/hp-laserjet.jpg"
              alt="HP LaserJet"
              width={400}
              height={250}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="font-bold text-lg">HP LaserJet Enterprise</h3>
            <p className="text-sm text-gray-600">Enterprise Printer</p>
          </div>

          <div className="border rounded-lg p-4">
            <Image
              src="/images/products/parrot-projector.jpg"
              alt="Parrot Projector"
              width={400}
              height={250}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="font-bold text-lg">Parrot Projector</h3>
            <p className="text-sm text-gray-600">Presentation Solution</p>
          </div>

        </div>
      </section>
      <section className="max-w-7xl mx-auto px-16 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Browse Product Categories
        </h2>

        <div className="grid md:grid-cols-5 gap-6">

          <div className="border rounded-lg p-6 text-center font-semibold">
            ICT Hardware
          </div>

          <div className="border rounded-lg p-6 text-center font-semibold">
            Managed Print
          </div>

          <div className="border rounded-lg p-6 text-center font-semibold">
            Office Equipment
          </div>

          <div className="border rounded-lg p-6 text-center font-semibold">
            Software
          </div>

          <div className="border rounded-lg p-6 text-center font-semibold">
            Accessories
          </div>

        </div>

      </section>
      <footer className="border-t mt-20 py-8 text-center">
        <div className="flex justify-center gap-6">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
        </div>
      </footer>
    </main>
  );
}