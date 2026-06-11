export default function ContactPage() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-8">
        Contact Remotlotlo Group
      </h1>

      <p className="text-lg mb-12">
        Contact Remotlotlo Group for product enquiries, quotations,
        procurement opportunities and technology solutions.
      </p>

      {/* Contact Information */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">
          Contact Information
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">
              Email
            </h3>

            <p className="mb-2">
              <a
                href="mailto:info@remotlotlogroup.org"
                className="text-blue-600 hover:underline"
              >
                info@remotlotlogroup.org
              </a>
            </p>

            <p>
              <a
                href="mailto:sales@remotlotlogroup.org"
                className="text-blue-600 hover:underline"
              >
                sales@remotlotlogroup.org
              </a>
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">
              Location
            </h3>

            <p>
              Gauteng, South Africa
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">
          Send Us a Message
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              className="w-full border rounded-lg p-3"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Organisation
            </label>

            <input
              type="text"
              className="w-full border rounded-lg p-3"
              placeholder="Enter organisation name"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email Address
            </label>

            <input
              type="email"
              className="w-full border rounded-lg p-3"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Message
            </label>

            <textarea
              rows={6}
              className="w-full border rounded-lg p-3"
              placeholder="How can we assist you?"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* CTA */}
      <section className="text-center py-12">
        <h2 className="text-4xl font-bold mb-6">
          Need a Quotation?
        </h2>

        <p className="max-w-3xl mx-auto text-lg mb-8">
          Our team is ready to assist with ICT hardware,
          managed print services, software licensing,
          office equipment and technology procurement.
        </p>

        <a
          href="/products"
          className="bg-black text-white px-8 py-4 rounded"
        >
          View Products
        </a>
      </section>
    </main>
  );
}