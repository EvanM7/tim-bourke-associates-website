import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact | Tim Bourke & Associates",
  description:
    "Contact Tim Bourke & Associates in Cashel, Co. Tipperary for agricultural consultancy, environmental advice, equine services and Prostep supplement enquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-stone-900">
      <Navbar />

      <PageHero
        eyebrow="Contact"
        title="Get in touch with Tim Bourke & Associates"
        description="Contact us to discuss agricultural consultancy, environmental advice, equine services, farm consultancy, or Prostep supplement enquiries. You can call directly or send an enquiry using the form below."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-stone-200 bg-stone-50 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Contact Details</h2>
            <div className="mt-6 space-y-4 text-stone-700">
              <p>Cashel, Co. Tipperary</p>
              <p>
                Office:{" "}
                <a href="tel:06263122" className="hover:text-green-700">
                  (062) 63122
                </a>
              </p>
              <p>
                Mobile:{" "}
                <a href="tel:0862568114" className="hover:text-green-700">
                  (086) 2568114
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:tim@prostep.ie" className="hover:text-green-700">
                  tim@prostep.ie
                </a>
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}