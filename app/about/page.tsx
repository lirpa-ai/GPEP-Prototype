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
  <>
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-16">
<section className="mb-20">
  <div className="flex justify-center mb-6">
    <Image
      src="/images/remotlotlogroup_logo.png"
      alt="Remotlotlo Group"
      width={92}
      height={92}
    />
  </div>

  <div className="h-1 w-16 bg-orange-500 mb-5"></div>

  <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-3">
    Technology Procurement Partner
  </p>

  <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
    About Remotlotlo Group
  </h1>

  <div className="max-w-4xl space-y-5 text-gray-700 text-lg leading-relaxed">
    <p>
      Remotlotlo Group is a South African technology procurement and
      business solutions provider focused on supplying ICT hardware,
      managed print services, software licensing and office equipment
      to government departments, municipalities, educational
      institutions and private sector organisations.
    </p>

    <p>
      Our objective is to simplify procurement by providing reliable
      access to quality products, trusted supplier partnerships and
      professional support services.
    </p>

    <p>
      We work with leading technology manufacturers and distributors
      to deliver solutions that meet organisational requirements while
      supporting value, compliance and operational efficiency.
    </p>
  </div>
</section>

<section className="bg-blue-50 border-y border-blue-100 py-16 w-screen relative left-1/2 -translate-x-1/2">
  <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
    <div>
      <div className="h-1 w-12 bg-orange-500 mb-4"></div>

      <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-3">
        Our Purpose
      </p>

      <h2 className="text-3xl font-bold text-blue-950 mb-5">
        Our Mission
      </h2>

      <p className="text-gray-700 leading-relaxed">
        To provide dependable technology products and procurement
        solutions that support productivity, service delivery and digital
        transformation across public and private sector organisations.
      </p>
    </div>

    <div>
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-3">
        How We Work
      </p>

      <h2 className="text-3xl font-bold text-blue-950 mb-5">
        Core Values
      </h2>

      <ul className="space-y-3 text-gray-700">
        <li className="flex gap-3">
          <span className="text-orange-500 font-bold">•</span>
          Professional Service Excellence
        </li>
        <li className="flex gap-3">
          <span className="text-orange-500 font-bold">•</span>
          Integrity and Accountability
        </li>
        <li className="flex gap-3">
          <span className="text-orange-500 font-bold">•</span>
          Quality Products and Solutions
        </li>
        <li className="flex gap-3">
          <span className="text-orange-500 font-bold">•</span>
          Customer-Centred Partnerships
        </li>
        <li className="flex gap-3">
          <span className="text-orange-500 font-bold">•</span>
          Continuous Improvement and Innovation
        </li>
      </ul>
    </div>
  </div>
</section>


      <section className="py-20">
        <div className="h-1 w-16 bg-orange-500 mb-4"></div>

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-3">
              Our Solutions
            </p>

            <h2 className="text-4xl font-bold text-blue-950 mb-10">
              What We Do
            </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="h-1 w-16 bg-orange-500 mb-4"></div>

        <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-3">
          Why Remotlotlo
        </p>

        <h2 className="text-4xl font-bold text-blue-950 mb-10">
          Why Choose Remotlotlo Group
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
             className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
                          </div>
          ))}
        </div>
      </section>


    </main>

    <section className="bg-blue-50 border-y border-blue-100 py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="h-1 w-16 bg-orange-500 mx-auto mb-4"></div>

        <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-3">
          Let&apos;s Work Together
        </p>

        <h2 className="text-4xl font-bold text-blue-950 mb-6">
          Ready to Support Your Procurement Requirements
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Speak to our team about ICT hardware, managed print, software licensing
          or office technology solutions for your organisation.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="bg-orange-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Request a Quotation
          </a>

          <a
            href="/contact"
            className="border-2 border-blue-800 text-blue-950 px-8 py-4 rounded-lg font-semibold hover:bg-blue-950 hover:text-white transition-colors"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  </>
);
}