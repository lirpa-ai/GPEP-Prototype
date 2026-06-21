"use client";

import { useState } from "react";
export default function ProductsPage() {
const [selectedCategory, setSelectedCategory] = useState<
  "all" | "hardware" | "print" | "office" | "software" | "accessories"
>("all");
 const featuredProducts = [
  {
    name: "Dell Latitude 5550",
    image: "/images/products/dell-latitude-5550.jpg",
    description: "Business laptop for enterprise environments.",
    specs: "Intel Core Ultra 5 • 16GB RAM • 512GB SSD",
  },

  {
    name: "Lenovo ThinkPad E16",
    image: "/images/products/lenovo-thinkpad-e16.webp",
    description: "Reliable productivity laptop for professionals.",
    specs: "Intel Core i7 • 16GB RAM • 512GB SSD",
  },

  {
    name: "Epson EcoTank L6570",
    image: "/images/products/epson-l6570.jpg",
    description: "High-volume colour printing with low operating costs.",
    specs: "A4 Multifunction • Duplex • Network Ready",
  },

  {
    name: "HP LaserJet Enterprise",
    image: "/images/products/hp-laserjet.jpg",
    description: "Fast dependable office printing solution.",
    specs: "40ppm • Duplex • Enterprise Security",
  },

  {
    name: "Parrot Projector",
    image: "/images/products/parrot-projector.jpg",
    description: "Presentation and meeting-room solution.",
    specs: "Full HD • HDMI • 4500 Lumens",
  },

  {
    name: "Logitech MK540",
    image: "/images/products/logitech-mk540.jpg",
    description: "Wireless keyboard and mouse combo.",
    specs: "2.4GHz Wireless • Long Battery Life",
  },
];

const ictHardwareProducts = [
  {
    name: "Dell Latitude 5550",
    image: "/images/products/dell-latitude-5550.jpg",
    description: "Business laptop for enterprise environments.",
    specs: "Intel Core Ultra 5 • 16GB RAM • 512GB SSD",
  },
  {
    name: "Lenovo ThinkPad E16",
    image: "/images/products/lenovo-thinkpad-e16.webp",
    description: "Reliable productivity laptop for professionals.",
    specs: "Intel Core i7 • 16GB RAM • 512GB SSD",
  },
  {
    name: "Dell OptiPlex 7010",
    image: "/images/products/dell-optiplex-7010.jpg",
    description: "Business desktop for office productivity.",
    specs: "Intel Core i5 • 16GB RAM • 512GB SSD",
  },
  {
    name: "HP ProDesk 400 G9",
    image: "/images/products/hp-prodesk-400-g9.jpg",
    description: "Compact desktop for modern workplaces.",
    specs: "Intel Core i5 • 16GB RAM • 512GB SSD",
  },
];


const managedPrintServicesProducts = [
  {
    name: "Epson EcoTank L6570",
    image: "/images/products/epson-ecotank-l6570.jpg",
    description: "High-volume business printer",
    specs: "A4 Multifunction • Duplex • Network Ready",
  },
  {
    name: "HP LaserJet Enterprise",
    image: "/images/products/hp-laserjet.jpg",
    description: "Enterprise laser printer",
    specs: "40ppm • Duplex • Enterprise Security",
  },
  {
    name: "Canon imageRUNNER 2925i",
    image: "/images/products/canon-imagerunner-2925i.jpg",
    description: "Multifunction office printer",
    specs: "A3 Multifunction • Scan • Copy",
  },
  {
    name: "Brother MFC-L6900DW",
    image: "/images/products/brother-mfc-l6900-dw.jpg",
    description: "Monochrome business printer",
    specs: "50ppm • Duplex • Wireless",
  },
];



const officeEquipment = [
  {
    name: "Parrot Projector",
    image: "/images/products/parrot-projector.jpg",
    description: "Professional presentation and meeting-room solution.",
    specs: "Full HD • HDMI • 4500 Lumens",
  },

  {
    name: "Epson EB-FH52",
    image: "/images/products/epson-eb-fh52.jpg",
    description: "Wireless projector for business presentations.",
    specs: "4000 Lumens • Full HD",
  },

  {
    name: "Logitech Rally Bar",
    image: "/images/products/logitech-rally-bar.jpg",
    description: "Video conferencing solution for boardrooms.",
    specs: "4K Camera • AI Audio • USB",
  },

  {
    name: "Samsung Flip Pro",
    image: "/images/products/samsung-flip-pro.jpg",
    description: "Interactive display for collaboration and training.",
    specs: "65 Inch • Touchscreen • 4K UHD",
  },
];


const softwareLicensing = [
  {
    name: "Microsoft 365 Business",
    image: "/images/products/microsoft365.jpg",
    description: "Latest Microsoft Cloud productivity suite for organisations.",
    specs: "Email • Teams • Office Apps",
  },

  {
    name: "Windows 11 Pro",
    image: "/images/products/windows11pro.jpg",
    description: "Professional operating system for business devices.",
    specs: "Security • Management • Productivity",
  },

  {
    name: "Microsoft Defender",
    image: "/images/products/microsoft-defender.jpg",
    description: "Enterprise endpoint protection solution.",
    specs: "Threat Protection • Endpoint Security",
  },

  {
    name: "Adobe Acrobat Pro",
    image: "/images/products/adobe-acrobat-pro.jpg",
    description: "Professional PDF creation and editing solution.",
    specs: "PDF Editing • eSignatures • Collaboration",
  },
];

const accessories = [
  {
    name: "Dell 24 Monitor",
    image: "/images/products/dell-24-monitor.jpg",
    description: "Professional monitor for office productivity.",
    specs: '24" Full HD • HDMI • IPS Panel',
  },

  {
    name: "Logitech MX 3S",
    image: "/images/products/logitec-mx-master-3s.jpg",
    description: "Advanced wireless productivity mouse.",
    specs: "Wireless • USB-C • Multi-Device",
  },

  {
    name: "Dell WD19 Dock",
    image: "/images/products/dell-wd19-dock.jpg",
    description: "USB-C docking station for modern laptops.",
    specs: "Dual Display • Power Delivery",
  },

  {
    name: "Logitech H390 Headset",
    image: "/images/products/logitech-h390-headset.jpg",
    description: "Teams Compatible Headset for meetings and collaboration.",
    specs: "USB • Noise Cancelling Mic ",
  },
];

const allProducts = [
  ...ictHardwareProducts.map((product) => ({
    ...product,
    category: "hardware",
  })),
  ...managedPrintServicesProducts.map((product) => ({
    ...product,
    category: "print",
  })),
  ...officeEquipment.map((product) => ({
    ...product,
    category: "office",
  })),
  ...softwareLicensing.map((product) => ({
    ...product,
    category: "software",
  })),
  ...accessories.map((product) => ({
    ...product,
    category: "accessories",
  })),
];

const categoryDetails = {
  all: {
    label: "All Products",
    description:
      "Browse our full range of technology products and procurement solutions.",
  },
  hardware: {
    label: "ICT Hardware",
    description:
      "Business laptops, desktops and essential technology hardware.",
  },
  print: {
    label: "Managed Print Services",
    description:
      "Reliable printing, multifunction and document-management solutions.",
  },
  office: {
    label: "Office Equipment",
    description:
      "Meeting-room, presentation and collaboration technology.",
  },
  software: {
    label: "Software Licensing",
    description:
      "Business software, security and productivity licensing solutions.",
  },
  accessories: {
    label: "Accessories",
    description:
      "Essential accessories to complete and support your technology setup.",
  },
};

const filteredProducts =
  selectedCategory === "all"
    ? allProducts
    : allProducts.filter((product) => product.category === selectedCategory);


  return (
    <main className="min-h-screen max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-6">
        Products & Solutions
      </h1>

      <p className="text-center max-w-3xl mx-auto text-lg mb-16">
        Remotlotlo Group supplies ICT hardware, managed print solutions,
        software licensing, office equipment and accessories from trusted
        global technology brands.
      </p>

      {/* Featured Products */}



        <section className="mb-20 bg-blue-50 border-y border-blue-100 py-16 w-screen relative left-1/2 -translate-x-1/2">
          <div className="max-w-6xl mx-auto px-6">
              <div className="mb-10">
                <div className="h-1 w-16 bg-orange-500 mb-4"></div>

                <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-2">
                  Selected for procurement teams
                </p>

                <h2 className="text-4xl font-bold text-blue-950 mb-3">
                  Featured Products
                </h2>

                <p className="max-w-2xl text-gray-700">
                  A curated selection of reliable technology solutions for modern workplaces.
                </p>
              </div>

            <div className="grid md:grid-cols-3 gap-8">
                  {featuredProducts.map((product) => (
                    <div
                      key={product.name}
                      className="bg-white border border-blue-100 rounded-xl p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow"
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
                        <button className="mt-4 bg-orange-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-orange-400 transition-colors">
                          Request Quote
                        </button>           
                      </p>
                    </div>
                  ))}
                </div>

          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Browse by Category</h2>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory("all")}
                className={`px-5 py-2 rounded-lg font-semibold transition-colors ${
                  selectedCategory === "all"
                    ? "bg-blue-900 text-white border border-blue-900 shadow-sm"
                    : "bg-white text-blue-950 border border-blue-200 hover:border-orange-500 hover:text-blue-900"
                }`}
            >
              All Products
            </button>

            <button
              onClick={() => setSelectedCategory("hardware")}
                className={`px-5 py-2 rounded-lg font-semibold transition-colors ${
                  selectedCategory === "hardware"
                    ? "bg-blue-900 text-white border border-blue-900 shadow-sm"
                    : "bg-white text-blue-950 border border-blue-200 hover:border-orange-500 hover:text-blue-900"
                }`}
            >
              ICT Hardware
            </button>

            <button
              onClick={() => setSelectedCategory("print")}
                className={`px-5 py-2 rounded-lg font-semibold transition-colors ${
                  selectedCategory === "print"
                    ? "bg-blue-900 text-white border border-blue-900 shadow-sm"
                    : "bg-white text-blue-950 border border-blue-200 hover:border-orange-500 hover:text-blue-900"
                }`}
            >
              Managed Print
            </button>

            <button
              onClick={() => setSelectedCategory("office")}
                className={`px-5 py-2 rounded-lg font-semibold transition-colors ${
                  selectedCategory === "office"
                    ? "bg-blue-900 text-white border border-blue-900 shadow-sm"
                    : "bg-white text-blue-950 border border-blue-200 hover:border-orange-500 hover:text-blue-900"
                }`}
            >
              Office Equipment
            </button>

            <button
              onClick={() => setSelectedCategory("software")}
                className={`px-5 py-2 rounded-lg font-semibold transition-colors ${
                  selectedCategory === "software"
                    ? "bg-blue-900 text-white border border-blue-900 shadow-sm"
                    : "bg-white text-blue-950 border border-blue-200 hover:border-orange-500 hover:text-blue-900"
                }`}
            >
              Software Licensing
            </button>

            <button
              onClick={() => setSelectedCategory("accessories")}
                className={`px-5 py-2 rounded-lg font-semibold transition-colors ${
                  selectedCategory === "accessories"
                    ? "bg-blue-900 text-white border border-blue-900 shadow-sm"
                    : "bg-white text-blue-950 border border-blue-200 hover:border-orange-500 hover:text-blue-900"
                }`}
            >
              Accessories
            </button>
          </div>
        </section>



      <section className="mb-20">
    <div className="mb-8">
      <p className="text-sm font-bold tracking-wider text-blue-700 mb-2">
        PRODUCT CATALOGUE
      </p>

      <h2 className="text-3xl font-bold text-blue-950 mb-2">
        {categoryDetails[selectedCategory].label}
      </h2>

      <p className="text-gray-600">
        {categoryDetails[selectedCategory].description}
      </p>
    </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">


          {filteredProducts.map((product) => (
            <div
              key={product.name}
              className="bg-white border border-blue-100 rounded-xl p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain mb-4"
              />

              <h3 className="text-xl font-bold mb-3">{product.name}</h3>

              <p className="mb-3">{product.description}</p>

              <p className="text-gray-600 mb-4">{product.specs}</p>

              <button className="mt-4 bg-orange-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-orange-400 transition-colors">
                Request Quote
              </button>
            </div>
          ))}
        </div>
      </section>

<section className="bg-blue-50 border-y border-blue-100 py-20 w-screen relative left-1/2 -translate-x-1/2">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <div className="h-1 w-16 bg-orange-500 mx-auto mb-5"></div>

    <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-3">
      Procurement Support
    </p>

    <h2 className="text-4xl font-bold text-blue-950 mb-4">
      Need a Custom Solution?
    </h2>

    <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
      From standard technology requirements to tailored workplace solutions,
      Remotlotlo Group provides dependable procurement support, product
      availability guidance and coordinated delivery for organisations across
      South Africa.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button className="bg-orange-500 text-black font-semibold px-7 py-3 rounded-lg hover:bg-orange-400 transition-colors">
        Request a Quotation
      </button>

      <button className="border border-blue-800 text-blue-900 font-semibold px-7 py-3 rounded-lg hover:bg-blue-100 transition-colors">
        Contact Our Team
      </button>
    </div>
  </div>
</section>

    </main>
  );
}