"use client";

import { useState } from "react";

export default function ProductsPage() {

const [selectedCategory, setSelectedCategory] = useState("all"); 

const featuredProducts = [
  {
    name: "Dell Latitude 7450",
    category: "hardware",
    image: "/images/products/dell-latitude-7450.jpg",
    description: "Enterprise laptop for government and business users.",
    specs: "Intel Core Ultra 7 • 16GB RAM • 512GB SSD",
  },

  {
    name: "HP EliteBook 840 G11",
    category: "hardware",
    image: "/images/products/hp-elitebook-840-g11.jpg",
    description: "Premium business notebook with enterprise security.",
    specs: "Intel Core Ultra 5 • 16GB RAM • 512GB SSD",
  },

  {
    name: "Canon imageRUNNER Advance DX C3926i",
    category: "hardware",
    image: "/images/products/canon-imagerunner-advance-dx-c3926i.jpg",
    description: "Enterprise multifunction colour printer.",
    specs: "A3 Colour • Scan • Copy • Print",
  },

  {
    name: "Poly Studio X52",
    category: "office",
    image: "/images/products/poly-studio-x52.jpg",
    description: "Professional video conferencing solution.",
    specs: "4K Camera • AI Audio • Teams & Zoom",
  },

  {
    name: "Microsoft 365 Business Premium",
    category: "software",
    image: "/images/products/microsoft-365-business-premium.jpg",
    description: "Productivity and security suite for organisations.",
    specs: "Office Apps • Teams • Exchange • Security",
  },

  {
    name: "Dell Universal Dock UD22",
    category: "hardware",
    image: "/images/products/dell-universal-dock-ud22.jpg",
    description: "Universal docking solution for modern workplaces.",
    specs: "USB-C • Multi-Display • Power Delivery",
  },
];


const ictHardwareProducts = [
  {
    name: "Dell Latitude 7450",
    category: "hardware",
    image: "/images/products/dell-latitude-7450.jpg",
    description: "Enterprise laptop for government and business users.",
    specs: "Intel Core Ultra 7 • 16GB RAM • 512GB SSD",
  },

  {
    name: "HP EliteBook 840 G11",
    category: "hardware",
    image: "/images/products/hp-elitebook-840-g11.jpg",
    description: "Premium business notebook with enterprise security.",
    specs: "Intel Core Ultra 5 • 16GB RAM • 512GB SSD",
  },

  {
    name: "Lenovo ThinkCentre M90s Gen5",
    category: "hardware",
    image: "/images/products/lenovo-thinkcentre-m90s-gen5.jpg",
    description: "Compact desktop for professional workplaces.",
    specs: "Intel Core i7 • 16GB RAM • 512GB SSD",
  },

  {
    name: "Samsung ViewFinity S6",
    category: "hardware",
    image: "/images/products/samsung-viewfinity-s6.jpg",
    description: "Professional monitor for office productivity.",
    specs: '27" QHD • USB-C • IPS Display',
  },

];


const managedPrintServices = [
  {
    name: "Epson Workforce Pro WF-C5890",
    category: "print",
    image: "/images/products/epson-workforce-pro-wf-c5890.jpg",
    description: "High-performance business inkjet printer.",
    specs: "A4 Multifunction • Duplex • Network Ready",
  },

  {
    name: "HP LaserJet Enterprise M634dn",
    category: "print",
    image: "/images/products/hp-laserjet-enterprise-m634dn.jpg",
    description: "Enterprise monochrome laser printer.",
    specs: "61ppm • Duplex • Enterprise Security",
  },

  {
    name: "Canon imageRUNNER Advance DX C3926i",
    category: "print",
    image: "/images/products/canon-imagerunner-advance-dx-c3926i.jpg",
    description: "Colour multifunction office printer.",
    specs: "A3 Colour • Scan • Copy • Print",
  },

  {
    name: "Brother MFC-L6915DW",
    category: "print",
    image: "/images/products/brother-mfc-l6915dw.jpg",
    description: "Business monochrome multifunction printer.",
    specs: "50ppm • Duplex • Wireless",
  },
];


const officeEquipment = [
  {
    name: "BenQ EH600 Projector",
    category: "office",
    image: "/images/products/benq-eh600-projector.jpg",
    description: "Smart business projector for meeting rooms.",
    specs: "Full HD • Wireless • 3500 Lumens",
  },

  {
    name: "Poly Studio X52",
    category: "office",
    image: "/images/products/poly-studio-x52.jpg",
    description: "Professional video conferencing solution.",
    specs: "4K Camera • AI Audio • Teams & Zoom",
  },

  {
    name: "Samsung Flip Pro WM65B",
    category: "office",
    image: "/images/products/samsung-flip-pro-wm65b.jpg",
    description: "Interactive display for collaboration and training.",
    specs: "65 Inch • Touchscreen • 4K UHD",
  },

  {
    name: "Logitech Rally Plus",
    category: "office",
    image: "/images/products/logitech-rally-plus.jpg",
    description: "Enterprise video conferencing system.",
    specs: "4K Camera • Modular Audio • USB",
  },
];


const softwareLicensing = [
  {
    name: "Microsoft 365 Business Premium",
    category: "software",
    image: "/images/products/microsoft-365-business-premium.jpg",
    description: "Productivity and security suite for organisations.",
    specs: "Office Apps • Teams • Exchange • Security",
  },

  {
    name: "Adobe Creative Cloud Teams",
    category: "software",
    image: "/images/products/adobe-creative-cloud-teams.jpg",
    description: "Creative software suite for business teams.",
    specs: "Photoshop • Illustrator • InDesign",
  },

  {
    name: "Microsoft Defender for Business",
    category: "software",
    image: "/images/products/microsoft-defender-business.jpg",
    description: "Advanced endpoint protection solution.",
    specs: "Threat Protection • Endpoint Security",
  },

  {
    name: "Adobe Acrobat Pro",
    category: "software",
    image: "/images/products/adobe-acrobat-pro.jpg",
    description: "Professional PDF creation and editing solution.",
    specs: "PDF Editing • eSignatures • Collaboration",
  },
];

const accessories = [
  {
    name: "Samsung ViewFinity S6",
    category: "accessories",
    image: "/images/products/samsung-viewfinity-s6.jpg",
    description: "Professional monitor for office productivity.",
    specs: '27" QHD • USB-C • IPS Display',
  },

  {
    name: "Logitech MX Keys S",
    category: "accessories",
    image: "/images/products/logitech-mx-keys-s.jpg",
    description: "Premium wireless keyboard for professionals.",
    specs: "Bluetooth • Backlit Keys • Multi-Device",
  },

  {
    name: "Dell Universal Dock UD22",
    category: "accessories",
    image: "/images/products/dell-universal-dock-ud22.jpg",
    description: "Universal docking station for modern workplaces.",
    specs: "USB-C • Multi-Display • Power Delivery",
  },

  {
    name: "Logitech Brio 4K",
    category: "accessories",
    image: "/images/products/logitech-brio-4K.jpg",
    description: "Ultra HD webcam for conferencing and collaboration.",
    specs: "4K Resolution • HDR • USB-C",
  },
];  

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-6">
        Technology Products & Procurement Solutions
      </h1>

      <p className="text-center max-w-3xl mx-auto text-lg mb-16">
        Treadstone Trading supplies ICT hardware, managed print solutions,
        software licensing, office equipment and accessories from trusted
        global technology brands.
      </p>

      <section className="mb-12">
        <div className="max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border-2 border-green-700 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-green-700"
          />
        </div>
      </section>

      <section className="mb-12">
        <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`border border-green-800 px-4 py-2 rounded-lg transition ${
            selectedCategory === "all"
              ? "bg-green-800 text-white"
              : "text-green-800 hover:bg-green-800 hover:text-white"
          }`}
        >
          All Products
        </button>
  
          <button
            onClick={() => setSelectedCategory("ict")}
            className={`border border-green-800 px-4 py-2 rounded-lg transition ${
              selectedCategory === "ict"
                ? "bg-green-800 text-white"
                : "text-green-800 hover:bg-green-800 hover:text-white"
            }`}
          >
            ICT Hardware
          </button>

          <button
            onClick={() => setSelectedCategory("print")}
            className={`border border-green-800 px-4 py-2 rounded-lg transition ${
              selectedCategory === "print"
                ? "bg-green-800 text-white"
                : "text-green-800 hover:bg-green-800 hover:text-white"
            }`}
          >
            Managed Print
          </button>

          <button
            onClick={() => setSelectedCategory("office")}
            className={`border border-green-800 px-4 py-2 rounded-lg transition ${
              selectedCategory === "office"
                ? "bg-green-800 text-white"
                : "text-green-800 hover:bg-green-800 hover:text-white"
            }`}
          >
            Office Equipment
          </button>

          <button
            onClick={() => setSelectedCategory("software")}
            className={`border border-green-800 px-4 py-2 rounded-lg transition ${
              selectedCategory === "software"
                ? "bg-green-800 text-white"
                : "text-green-800 hover:bg-green-800 hover:text-white"
            }`}
          >
            Software
          </button>

          <button
            onClick={() => setSelectedCategory("accessories")}
            className={`border border-green-800 px-4 py-2 rounded-lg transition ${
              selectedCategory === "accessories"
                ? "bg-green-800 text-white"
                : "text-green-800 hover:bg-green-800 hover:text-white"
            }`}
          >
            Accessories
          </button>

        </div>
      </section>


      {/* Featured Products */}
      {selectedCategory === "all" && (
      <section className="mb-20">
        <h2 className="text-4xl font-bold mb-8 text-green-800">
          Technology Catalogue
        </h2>

       <div className="grid md:grid-cols-3 gap-8">
        {featuredProducts.map((product) => (
          <div
            key={product.name}
            className="border rounded-lg p-6 flex flex-col h-full"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain mb-4"
            />

            <h3 className="text-2xl font-bold mb-2">
              {product.name}
            </h3>

            <p className="mb-2">
              {product.description}
            </p>

            <p className="text-sm text-gray-600">
              {product.specs}
            </p>
            <button className="mt-auto bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded">
              Request Quote
            </button>
          </div>
        ))}
      </div>
      </section>
      )}

      {(selectedCategory === "all" || selectedCategory === "ict") && (
        <section className="mb-20">
        <h2 className="text-3xl font-bold mb-2 text-green-900">ICT Hardware</h2>
        <div className="w-20 h-1 bg-yellow-500 mb-8"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ictHardwareProducts.map((product) => (
            <div
              key={product.name}
              className="
                bg-white
                rounded-lg
                shadow-md
                hover:shadow-xl
                hover:-translate-y-1
                transition
                duration-300
                p-6
                flex
                flex-col
                "
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain mb-4"
              />

              <h3 className="text-2xl font-bold mb-3">
                {product.name}
              </h3>

              <p className="mb-3">
                {product.description}
              </p>

              <p className="text-gray-600 mb-4">
                {product.specs}
              </p>

              <button className="mt-auto bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded">              
                Request Quote
              </button>
            </div>
          ))}
        </div>
      </section>
      )}

      {(selectedCategory === "all" || selectedCategory === "print") && (
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-2 text-green-900">Managed Print Services</h2>
        <div className="w-20 h-1 bg-yellow-500 mb-8"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {managedPrintServices.map((product) => (
            <div
              key={product.name}
              className="
                bg-white
                rounded-lg
                shadow-md
                hover:shadow-xl
                hover:-translate-y-1
                transition
                duration-300
                p-6
                flex
                flex-col
                "
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain mb-4"
              />

              <h3 className="text-2xl font-bold mb-3">
                {product.name}
              </h3>

              <p className="mb-3">
                {product.description}
              </p>

              <p className="text-gray-600 mb-4">
                {product.specs}
              </p>

              <button className="mt-auto bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded">
                Request Quote
              </button>
            </div>
          ))}
        </div>
      </section> 
      )}

{(selectedCategory === "all" || selectedCategory === "office") && (
<section className="mb-20">
  <h2 className="text-3xl font-bold mb-2 text-green-900">Office Equipment</h2>
  <div className="w-20 h-1 bg-yellow-500 mb-8"></div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {officeEquipment.map((product) => (
      <div
        key={product.name}
          className="
          bg-white
          rounded-lg
          shadow-md
          hover:shadow-xl
          hover:-translate-y-1
          transition
          duration-300
          p-6
          flex
          flex-col
          "
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain mb-4"
        />

        <h3 className="text-2xl font-bold mb-3">
          {product.name}
        </h3>

        <p className="mb-3">
          {product.description}
        </p>

        <p className="text-gray-600 mb-4">
          {product.specs}
        </p>

        <button className="mt-auto bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded">
          Request Quote
        </button>
      </div>
    ))}
  </div>
</section>
)}

{(selectedCategory === "all" || selectedCategory === "software") && (
  <section className="mb-20">
  <h2 className="text-3xl font-bold mb-2 text-green-900">Software Licensing</h2>
<div className="w-20 h-1 bg-yellow-500 mb-8"></div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {softwareLicensing.map((product) => (
      <div
        key={product.name}
          className="
          bg-white
          rounded-lg
          shadow-md
          hover:shadow-xl
          hover:-translate-y-1
          transition
          duration-300
          p-6
          flex
          flex-col
          "
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain mb-4"
        />

        <h3 className="text-2xl font-bold mb-3">
          {product.name}
        </h3>

        <p className="mb-3">
          {product.description}
        </p>

        <p className="text-gray-600 mb-4">
          {product.specs}
        </p>

        <button className="mt-auto bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded">
          Request Quote
        </button>
      </div>
    ))}
  </div>
</section>
)}




{(selectedCategory === "all" || selectedCategory === "accessories") && (
<section className="mb-20">
  <h2 className="text-3xl font-bold mb-2 text-green-900">Accessories</h2>
  <div className="w-20 h-1 bg-yellow-500 mb-8"></div>
 
   <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {accessories.map((product) => (
      <div
        key={product.name}
          className="
          bg-white
          rounded-lg
          shadow-md
          hover:shadow-xl
          hover:-translate-y-1
          transition
          duration-300
          p-6
          flex
          flex-col
          "
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain mb-4"
        />

        <h3 className="text-2xl font-bold mb-3">
          {product.name}
        </h3>

        <p className="mb-3">
          {product.description}
        </p>

        <p className="text-gray-600 mb-4">
          {product.specs}
        </p>

        <button className="mt-auto bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded">
          Request Quote
        </button>
      </div>
    ))}
  </div>
</section>
)}

<section className="text-center py-20">
  <h2 className="text-4xl font-bold mb-6">
    Need a Custom Solution?
  </h2>

  <p className="max-w-3xl mx-auto text-lg mb-8">
    Treadstone Trading supplies ICT hardware, managed print services,
    software licensing and office technology solutions to government,
    education and corporate clients throughout South Africa.
  </p>

  <a
    href="/contact"
    className="bg-orange-400 text-black font-semibold px-8 py-4 rounded text-lg"
  >
    Request a Quotation
  </a>
</section>

    </main>
  );
}