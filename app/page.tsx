import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
<main className="min-h-screen bg-white">

      <header className="flex justify-between items-center p-6 border-b">
          <div className="flex items-center">
            <Image
              src="/images/remotlotlogroup_logo.png"
              alt="Remotlotlo Group"
              width={60}
              height={60}
            />
            <h1 className="text-3xl font-bold mb-4">
              Remotlotlo Group
            </h1>          
          </div>

      </header>

      <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-10 top-16 grid grid-cols-5 gap-3">
            {Array.from({ length: 25 }).map((_, index) => (
              <div
                key={index}
                className="h-2 w-2 rounded-full bg-blue-300"
              />
            ))}
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <div className="w-20 h-1 bg-orange-400 mx-auto mb-8"></div>

          <p className="text-sm font-semibold tracking-widest uppercase text-orange-300 mb-5">
            Technology Procurement Solutions
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            ICT Hardware, Office Equipment
            <br />
            & Procurement Solutions
          </h2>

          <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100 mb-10">
            Remotlotlo Group delivers reliable technology products and procurement
            support for government departments, municipalities, institutions and
            corporate organisations.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/products"
              className="bg-orange-400 hover:bg-orange-500 text-slate-950 font-semibold px-8 py-4 rounded-lg transition"
            >
              Browse Products
            </Link>

            <Link
              href="/contact"
              className="border border-white/70 hover:bg-white hover:text-blue-950 text-white font-semibold px-8 py-4 rounded-lg transition"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

        <section className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6 md:px-16 py-14">
          <div className="border border-blue-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-1 bg-orange-400 mb-5"></div>

            <h3 className="text-xl font-bold text-blue-950 mb-3">
              ICT Hardware
            </h3>

            <p className="text-[17px] text-gray-700 leading-relaxed">
              Laptops, desktops, workstations and accessories from leading technology brands.
            </p>
          </div>

          <div className="border border-blue-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-1 bg-orange-400 mb-5"></div>

            <h3 className="text-xl font-bold text-blue-950 mb-3">
              Managed Print Services
            </h3>

            <p className="text-[17px] text-gray-700 leading-relaxed">
              Professional print fleet management, maintenance and consumables supply.
            </p>
          </div>

          <div className="border border-blue-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-1 bg-orange-400 mb-5"></div>

            <h3 className="text-xl font-bold text-blue-950 mb-3">
              Office Equipment
            </h3>

            <p className="text-[17px] text-gray-700 leading-relaxed">
              Projectors, presentation systems, conferencing equipment and office solutions.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-100 py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-sm font-bold tracking-[0.18em] text-orange-500 uppercase mb-3">
              Technology Ecosystem
            </p>

            <h2 className="text-3xl font-bold text-blue-950 mb-4">
              Trusted Technology Brands
            </h2>

            <p className="max-w-2xl mx-auto text-[17px] text-gray-700 leading-relaxed mb-10">
              We source technology solutions from recognised global brands to support
              reliable procurement, deployment and long-term operational needs.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <div className="bg-white border border-slate-200 rounded-lg px-6 py-3 font-semibold text-blue-950 shadow-sm">Dell</div>
              <div className="bg-white border border-slate-200 rounded-lg px-6 py-3 font-semibold text-blue-950 shadow-sm">Lenovo</div>
              <div className="bg-white border border-slate-200 rounded-lg px-6 py-3 font-semibold text-blue-950 shadow-sm">HP</div>
              <div className="bg-white border border-slate-200 rounded-lg px-6 py-3 font-semibold text-blue-950 shadow-sm">Microsoft</div>
              <div className="bg-white border border-slate-200 rounded-lg px-6 py-3 font-semibold text-blue-950 shadow-sm">Epson</div>
              <div className="bg-white border border-slate-200 rounded-lg px-6 py-3 font-semibold text-blue-950 shadow-sm">Canon</div>
              <div className="bg-white border border-slate-200 rounded-lg px-6 py-3 font-semibold text-blue-950 shadow-sm">Logitech</div>
              <div className="bg-white border border-slate-200 rounded-lg px-6 py-3 font-semibold text-blue-950 shadow-sm">Parrot</div>
            </div>
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