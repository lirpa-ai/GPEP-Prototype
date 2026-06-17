import Image from "next/image";

export default function AboutPage() {
  const services = [
    {
      title: "ICT Hardware Procurement",
      description:
        "Supply of laptops, desktops, monitors and networking equipment.",
    },
    {
      title: "Managed Print Services",
      description:
        "Business printing solutions and printer consumables.",
    },
    {
      title: "Software Licensing",
      description:
        "Microsoft, Adobe and business software licensing.",
    },
    {
      title: "Office Equipment Supply",
      description:
        "Projectors, conferencing systems and office technology.",
    },
    {
      title: "Technical Support",
      description:
        "Deployment assistance and after-sales support services.",
    },
  ];

  const whyChooseUs = [
    {
      title: "Trusted Technology Partners",
      description:
        "Access to leading global technology brands and distributors.",
    },
    {
      title: "Competitive Pricing",
      description:
        "Cost-effective procurement solutions tailored to your budget.",
    },
    {
      title: "Responsive Service",
      description:
        "Dedicated support from enquiry through delivery.",
    },
    {
      title: "Reliable Delivery",
      description:
        "Dependable fulfilment and implementation support.",
    },
  ];

  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-16">
      <div className="flex justify-center mb-8">
        <Image
          src="/images/treadstonetrading_logo.png"
          alt="Treadstone Trading"
            width={100}
            height={100}
        />
      </div>

      <h1 className="text-4xl font-bold mb-4">
        About Treadstone Trading
      </h1>

      <p className="text-xl text-gray-600 mb-8">
        Technology Procurement & Business Solutions Partner
      </p>

      <p className="text-lg leading-8 max-w-4xl">
        Treadstone Trading is a South African technology procurement partner
        supporting government departments, municipalities, educational
        institutions, state-owned entities and corporate organisations.
        We specialise in ICT hardware, managed print services, software
        licensing and office technology solutions, delivering reliable
        products through trusted supplier partnerships.
      </p>

      <section className="mt-16">
      <h2 className="text-4xl font-bold text-green-800 mb-2">
        Our Mission
      </h2>

      <div className="w-20 h-1 bg-yellow-500 mb-6"></div>

        <p>
          To provide dependable technology products and procurement
          solutions that support productivity, service delivery and
          digital transformation across public and private sector
          organisations.
        </p>
      </section>

      <section className="mt-16">
      <h2 className="text-4xl font-bold text-green-800 mb-2">
        Core Values
      </h2>

      <div className="w-20 h-1 bg-yellow-500 mb-6"></div>

        <ul className="list-disc pl-6 space-y-2">
          <li>Professional Service Excellence</li>
          <li>Integrity and Accountability</li>
          <li>Quality Products and Solutions</li>
          <li>Customer-Centred Partnerships</li>
          <li>Continuous Improvement and Innovation</li>
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-4xl font-bold text-green-800 mb-2">
          What We Do
        </h2>

        <div className="w-20 h-1 bg-yellow-500 mb-6"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="border rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold mb-3">
                {service.title}
              </h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

     <section className="mt-12">
      <h2 className="text-4xl font-bold text-green-800 mb-2">
        Why Choose Treadstone Trading
      </h2>

      <div className="w-20 h-1 bg-yellow-500 mb-6"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="border rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
      <h2 className="text-4xl font-bold text-green-800 mb-2">
        Industries We Serve
      </h2>

      <div className="w-20 h-1 bg-yellow-500 mb-6"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            Government Departments
          </div>

          <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            Municipalities
          </div>

          <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            Educational Institutions
          </div>

          <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            State-Owned Entities
          </div>

          <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            Corporate Organisations
          </div>

          <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            Non-Profit Organisations
          </div>
        </div>
      </section>

      <section className="text-center py-20">
        <h2 className="text-4xl font-bold mb-6">
          Need a Procurement or Technology Solution?
        </h2>

        <p className="max-w-3xl mx-auto text-lg mb-8">
          Whether you require ICT hardware, managed print services,
          software licensing or office technology solutions, Treadstone
          Trading is ready to assist with a customised quotation tailored
          to your organisation's needs.
        </p>

        <a
          href="/contact"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded text-lg"
        >
          Request a Quotation
        </a>
      </section>
    </main>
  );
}