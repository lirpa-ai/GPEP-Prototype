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
          src="/images/remotlotlogroup_logo.png"
          alt="Treadstone Trading"
            width={120}
            height={120}
        />
      </div>

      <h1 className="text-5xl font-bold mb-8">
        About Treadstone Trading
      </h1>

      <p className="mb-6 text-lg">
        Treadstone Trading is a South African technology procurement and
        business solutions provider focused on supplying ICT hardware,
        managed print services, software licensing and office equipment
        to government departments, municipalities, educational
        institutions and private sector organisations.
      </p>

      <p className="mb-6">
        Our objective is to simplify procurement by providing reliable
        access to quality products, trusted supplier partnerships and
        professional support services.
      </p>

      <p>
        We work with leading technology manufacturers and distributors
        to deliver solutions that meet organisational requirements while
        ensuring value, compliance and operational efficiency.
      </p>

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-4">
          Our Mission
        </h2>

        <p>
          To provide dependable technology products and procurement
          solutions that support productivity, service delivery and
          digital transformation across public and private sector
          organisations.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-4">
          Core Values
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Professional Service Excellence</li>
          <li>Integrity and Accountability</li>
          <li>Quality Products and Solutions</li>
          <li>Customer-Centred Partnerships</li>
          <li>Continuous Improvement and Innovation</li>
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8">
          What We Do
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="border rounded-lg p-6"
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
        <h2 className="text-3xl font-bold mb-8">
          Why Choose Treadstone Trading
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="border rounded-lg p-6"
            >
              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center py-20">
        <h2 className="text-4xl font-bold mb-6">
          Need ICT Solutions For Your Organisation?
        </h2>

        <p className="max-w-3xl mx-auto text-lg mb-8">
          Contact Treadstone Trading today for a customised quotation
          tailored to your organisation's requirements.
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