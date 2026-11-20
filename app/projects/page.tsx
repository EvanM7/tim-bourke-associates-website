import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { existsSync } from "node:fs";
import { join } from "node:path";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Selected Projects | Tim Bourke & Associates",
  description:
    "Examples of agricultural building planning and specialist livestock nutrition consultancy by Tim Bourke & Associates.",
  alternates: { canonical: "/projects" },
};

const photoAssets = [
  { src: "/projects/limerick-cattle-unit-exterior.jpg", alt: "Exterior view of an agricultural cattle-unit building supplied by Tim Bourke", label: "Building exterior" },
  { src: "/projects/limerick-cattle-unit-interior.jpg", alt: "Covered interior passageway and livestock doors in an agricultural building", label: "Interior passageway" },
  { src: "/projects/limerick-cattle-unit-entrance.jpg", alt: "Open entrance and covered walkway of the agricultural building", label: "Entrance and covered area" },
];

const videoSrc = "/projects/con-marnane-mineral-licks.mp4";

// Only render media once its file is present in the repository.
// This avoids broken images and empty video players in preview builds.
function assetExists(src: string) {
  return existsSync(join(process.cwd(), "public", src.replace(/^\//, "")));
}

export default function ProjectsPage() {
  const photos = photoAssets.filter((photo) => assetExists(photo.src));
  const hasVideo = assetExists(videoSrc);

  return (
    <main className="min-h-screen bg-white text-stone-900">
      <Navbar />
      <PageHero
        eyebrow="Selected Work"
        title="Practical consultancy, from planning to nutrition."
        description="Examples of agricultural building planning and specialist livestock nutrition work undertaken by Tim Bourke & Associates."
      />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <article className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
            <div className="bg-emerald-950 p-8 text-emerald-50">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Agricultural building planning</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-white">Cattle unit, County Limerick</h2>
            </div>
            <div className="p-8">
              <p className="leading-8 text-stone-700">
                Tim Bourke planned a cattle unit in County Limerick, with construction carried out by
                Dillon Contractors. This project highlights the farm building design and planning
                side of the consultancy.
              </p>
              {photos.length > 0 && (
                <div className="mt-7">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {photos.map((photo, index) => (
                      <figure key={photo.src} className={index === 0 ? "sm:col-span-2" : ""}>
                        <div className={`relative overflow-hidden rounded-2xl bg-stone-100 ${index === 0 ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
                          <Image src={photo.src} alt={photo.alt} fill
                            sizes={index === 0 ? "(max-width: 768px) 100vw, 550px" : "(max-width: 768px) 100vw, 275px"}
                            className="object-cover" />
                        </div>
                        <figcaption className="mt-2 text-xs text-stone-500">{photo.label}</figcaption>
                      </figure>
                    ))}
                  </div>
                  <p className="mt-4 text-xs leading-5 text-stone-500">
                    Project photography supplied by Tim Bourke.
                  </p>
                </div>
              )}
              <dl className="mt-6 grid gap-3 text-sm">
                <div><dt className="font-semibold text-stone-900">Planning</dt><dd className="text-stone-600">Tim Bourke</dd></div>
                <div><dt className="font-semibold text-stone-900">Construction</dt><dd className="text-stone-600">Dillon Contractors</dd></div>
                <div><dt className="font-semibold text-stone-900">Location</dt><dd className="text-stone-600">County Limerick, Ireland</dd></div>
              </dl>
              <Link href="/farm-consultancy" className="mt-8 inline-flex font-semibold text-emerald-800 hover:underline">
                Explore farm consultancy <span aria-hidden="true" className="ml-2">&rarr;</span>
              </Link>
            </div>
          </article>
          <article className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
            <div className="bg-stone-800 p-8 text-stone-100">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">Livestock nutrition</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-white">Specialist mineral supplementation</h2>
            </div>
            <div className="p-8">
              <p className="leading-8 text-stone-700">
                Individual livestock operations can require tailored nutritional advice.
                Tim Bourke has provided specialist mineral lick recommendations to clients,
                including work documented for client Con Marnane.
              </p>
              {hasVideo && (
                <figure className="mt-7">
                  <video controls preload="metadata" playsInline className="w-full rounded-2xl bg-stone-900"
                    aria-label="Video of Con Marnane's livestock mineral licks">
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support HTML video.
                  </video>
                  <figcaption className="mt-2 text-xs leading-5 text-stone-500">
                    Client footage supplied by Tim Bourke showing specialist mineral licks.
                  </figcaption>
                </figure>
              )}
              <Link href="/contact" className="mt-8 inline-flex font-semibold text-emerald-800 hover:underline">
                Discuss livestock nutrition <span aria-hidden="true" className="ml-2">&rarr;</span>
              </Link>
            </div>
          </article>
        </div>
        <div className="mt-12 rounded-3xl bg-[#f9f7f1] p-8 md:p-12">
          <h2 className="font-serif text-3xl font-semibold">Have a project in mind?</h2>
          <p className="mt-4 max-w-2xl leading-7 text-stone-700">
            Contact Tim Bourke &amp; Associates about farm building plans, agricultural consultancy or nutritional advice.
          </p>
          <Link href="/contact" className="mt-6 inline-flex rounded-full bg-emerald-800 px-6 py-3 font-semibold text-white hover:bg-emerald-900">Send an enquiry</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
