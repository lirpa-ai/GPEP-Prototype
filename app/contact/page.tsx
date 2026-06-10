export default function ContactPage() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">
        Contact Us
      </h1>

      <p className="mb-10 text-lg">
        Contact Remotlotlo Group for product enquiries, quotations,
        procurement support and business partnerships.
      </p>

      <div className="space-y-6">
        <div>
        <h2 className="text-xl font-bold">Email</h2>

        <a
            href="mailto:info@remotlotlogroup.org"
            className="block text-blue-600"
        >
            info@remotlotlogroup.org
        </a>

        <a
            href="mailto:sales@remotlotlogroup.org"
            className="block text-blue-600"
        >
            sales@remotlotlogroup.org
        </a>
        </div>

        <div>
          <h2 className="text-xl font-bold">Telephone</h2>
          <p>+27 82 712 2855</p>
        </div>

        <div>
          <h2 className="text-xl font-bold">Location</h2>
          <p>8 Angelica Avenue, Glenvista, Johannesburg, Gauteng, South Africa</p>
        </div>

        <div>
          <h2 className="text-xl font-bold">Business Hours</h2>
          <p>Monday - Friday</p>
          <p>08:00 - 17:00</p>
        </div>
      </div>
    </main>
   );
}