export default function ProductsPage() {
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
    description: "Fast and dependable office printing solution.",
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
    specs: "4000 Lumens • Full HD • Wireless",
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
    description: "Cloud productivity suite for organisations.",
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
    specs: "USB-C • Dual Display • Power Delivery",
  },

  {
    name: "Logitech H390 Headset",
    image: "/images/products/logitech-h390-headset.jpg",
    description: "USB headset for meetings and collaboration.",
    specs: "USB • Noise Cancelling Mic • Teams Compatible",
  },
];




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
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>

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
              <button className="mt-4 bg-black text-white px-4 py-2 rounded">
                Request Quote
              </button>             
            </p>
          </div>
        ))}
      </div>
      </section>
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">ICT Hardware</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ictHardwareProducts.map((product) => (
            <div
              key={product.name}
              className="border rounded-lg p-6 flex flex-col"
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

              <button className="mt-auto bg-black text-white px-4 py-2 rounded">
                Request Quote
              </button>
            </div>
          ))}
        </div>
      </section>  


      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Managed Print Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {managedPrintServicesProducts.map((product) => (
            <div
              key={product.name}
              className="border rounded-lg p-6 flex flex-col"
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

              <button className="mt-auto bg-black text-white px-4 py-2 rounded">
                Request Quote
              </button>
            </div>
          ))}
        </div>
      </section> 

<section className="mb-20">
  <h2 className="text-3xl font-bold mb-8">
    Office Equipment
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {officeEquipment.map((product) => (
      <div
        key={product.name}
        className="border rounded-lg p-6 flex flex-col"
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

        <button className="mt-auto bg-black text-white px-4 py-2 rounded">
          Request Quote
        </button>
      </div>
    ))}
  </div>
</section>

<section className="mb-20">
  <h2 className="text-3xl font-bold mb-8">
    Software Licensing
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {softwareLicensing.map((product) => (
      <div
        key={product.name}
        className="border rounded-lg p-6 flex flex-col"
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

        <button className="mt-auto bg-black text-white px-4 py-2 rounded">
          Request Quote
        </button>
      </div>
    ))}
  </div>
</section>



<section className="mb-20">
  <h2 className="text-3xl font-bold mb-8">
    Accessories
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {accessories.map((product) => (
      <div
        key={product.name}
        className="border rounded-lg p-6 flex flex-col"
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

        <button className="mt-auto bg-black text-white px-4 py-2 rounded">
          Request Quote
        </button>
      </div>
    ))}
  </div>
</section>

<section className="text-center py-20">
  <h2 className="text-4xl font-bold mb-6">
    Need a Custom Solution?
  </h2>

  <p className="max-w-3xl mx-auto text-lg mb-8">
    Remotlotlo Group supplies ICT hardware, managed print services,
    software licensing and office technology solutions to government,
    education and corporate clients throughout South Africa.
  </p>

  <a
    href="/contact"
    className="bg-black text-white px-8 py-4 rounded text-lg"
  >
    Request a Quotation
  </a>
</section>

    </main>
  );
}