export default function ServicesPage() {
  return (
    <main className="min-h-screen max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Our Services
      </h1>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            ICT Hardware Procurement
          </h2>
          <p>
            Supply of laptops, desktops, workstations, monitors,
            networking equipment and related technology products
            from trusted global manufacturers.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Managed Print Services
          </h2>
          <p>
            Supply of printer consumables.
          </p>
        </div>


        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Software Licensing
          </h2>
          <p>
            Licensing solutions for Microsoft and security software.
          </p>
        </div>


    
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Office Equipment Supply
          </h2>
          <p>
            Projectors, conferencing systems, presentation
            equipment.
          </p>
        </div>


        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Technical Support
          </h2>
          <p>
            Product support, after-sales service to ensure reliable business
            operations.
          </p>
        </div>

    
</div>

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Why Choose Treadstone Trading?
        </h2>

        <p className="max-w-3xl mx-auto text-lg">
          We combine trusted supplier partnerships, professional
          service delivery and industry expertise to provide
          dependable technology procurement solutions for
          government departments, municipalities, educational
          institutions and private sector organisations.
        </p>
      </section>
    </main>
  );
}