import Image from "next/image";
export default function AboutPage() {
  return (
 <main className="min-h-screen max-w-5xl mx-auto px-6 py-16">
      <div className="flex justify-center mb-8">
        <Image
          src="/images/remotlotlogroup_logo.png"
          alt="Remotlotlo Group"
          width={80}
          height={80}
        />
      </div>
      <h1 className="text-4xl font-bold mb-8">About Remotlotlo Group</h1>

      <p className="mb-6 text-lg">
        Remotlotlo Group is a South African technology procurement and
        business solutions provider focused on supplying ICT hardware,
        managed print services, software licensing and office equipment
        to government departments, municipalities, educational institutions
        and private sector organisations.
      </p>

      <p className="mb-6">
        Our objective is to simplify procurement by providing reliable
        access to quality products, trusted supplier partnerships and
        professional support services. We work with leading technology
        manufacturers and distributors to deliver solutions that meet
        organisational requirements while ensuring value, compliance and
        operational efficiency.
      </p>

      <p className="mb-6">
        Our product portfolio includes laptops, desktop computers,
        printers, managed print solutions, presentation equipment,
        conferencing systems, software licensing and related office
        technologies.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">
        Our Mission
      </h2>

      <p className="mb-6">
        To provide dependable technology products and procurement
        solutions that support productivity, service delivery and
        digital transformation across public and private sector
        organisations.
      </p>

      <h2 className="text-2xl font-bold mt-12 mb-4">
        Core Values
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Professional Service Excellence</li>
        <li>Integrity and Accountability</li>
        <li>Quality Products and Solutions</li>
        <li>Customer-Centred Partnerships</li>
        <li>Continuous Improvement and Innovation</li>
      </ul>
    </main>
  );
}