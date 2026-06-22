export default function ContactPage() {
  return (
    <>
      <section className="bg-blue-50 border-y border-blue-100 py-16">
        <div className="max-w-5xl mx-auto px-6">
        {/* Hero */}
        <section className="mb-20">
          <div className="h-1 w-16 bg-orange-500 mb-5"></div>

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-3">
            Get In Touch
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
            Talk to Our Procurement Team
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-gray-700">
            Whether you require a quotation, confirmation of product availability,
            support with bulk procurement or guidance on a technology requirement,
            our team is ready to assist.
          </p>
        </section>
  </div>
</section>

<main className="min-h-screen max-w-5xl mx-auto px-6 py-16">


        {/* Contact details and form */}
        <section className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left column */}
          <div className="lg:col-span-2">
            <div className="h-1 w-16 bg-orange-500 mb-4"></div>

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-3">
              Contact Information
            </p>

            <h2 className="text-3xl font-bold text-blue-950 mb-6">
              We Are Here to Help
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8">
              Send us your requirement and we will connect you with the
              appropriate member of our team.
            </p>

            <div className="space-y-5">
              <div className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-blue-950 mb-3">
                  Email Us
                </h3>

                <a
                  href="mailto:info@remotlotlogroup.org"
                  className="block text-blue-700 hover:underline mb-2"
                >
                  info@remotlotlogroup.org
                </a>

                <a
                  href="mailto:sales@remotlotlogroup.org"
                  className="block text-blue-700 hover:underline"
                >
                  sales@remotlotlogroup.org
                </a>
              </div>

              <div className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-blue-950 mb-3">
                  Location
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  8 Angelica Avenue
                  <br />
                  Glenvista, Gauteng
                  <br />
                  South Africa
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-950 mb-3">
                  Procurement Support
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  We support government, education, enterprise and
                  institutional procurement requirements across South Africa.
                </p>
              </div>
            </div>
          </div>

          {/* Right column: form */}
          <div className="lg:col-span-3 bg-white border border-blue-100 rounded-xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-blue-950 mb-2">
              Send an Enquiry
            </h2>

            <p className="text-gray-700 mb-8">
              Tell us how we can assist your organisation.
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block mb-2 font-semibold text-blue-950"
                  >
                    Full Name
                  </label>

                  <input
                    id="fullName"
                    type="text"
                    className="w-full border border-blue-200 rounded-lg px-4 py-3 outline-none focus:border-blue-700"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="organisation"
                    className="block mb-2 font-semibold text-blue-950"
                  >
                    Organisation
                  </label>

                  <input
                    id="organisation"
                    type="text"
                    className="w-full border border-blue-200 rounded-lg px-4 py-3 outline-none focus:border-blue-700"
                    placeholder="Enter organisation name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 font-semibold text-blue-950"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    className="w-full border border-blue-200 rounded-lg px-4 py-3 outline-none focus:border-blue-700"
                    placeholder="name@organisation.co.za"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 font-semibold text-blue-950"
                  >
                    Contact Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    className="w-full border border-blue-200 rounded-lg px-4 py-3 outline-none focus:border-blue-700"
                    placeholder="Enter your contact number"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="enquiryType"
                  className="block mb-2 font-semibold text-blue-950"
                >
                  Enquiry Type
                </label>

                <select
                  id="enquiryType"
                  className="w-full border border-blue-200 rounded-lg px-4 py-3 bg-white outline-none focus:border-blue-700"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an enquiry type
                  </option>
                  <option>Request a Quotation</option>
                  <option>Product Availability</option>
                  <option>Bulk Procurement</option>
                  <option>General Enquiry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 font-semibold text-blue-950"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={6}
                  className="w-full border border-blue-200 rounded-lg px-4 py-3 outline-none focus:border-blue-700"
                  placeholder="Please include the products, quantities or procurement requirements you would like us to assist with."
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-orange-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Full-width reassurance band */}
      <section className="bg-blue-50 border-y border-blue-100 py-14">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-3">
            Procurement Made Simpler
          </p>

          <h2 className="text-3xl font-bold text-blue-950 mb-4">
            Supporting Organisational Technology Requirements
          </h2>

          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
            From individual product enquiries to larger procurement
            requirements, Remotlotlo Group helps organisations access the
            technology solutions they need.
          </p>
        </div>
      </section>
    </>
  );
}