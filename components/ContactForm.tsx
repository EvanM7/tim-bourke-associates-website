"use client";

import { useForm, ValidationError } from "@formspree/react";

const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <div className="rounded-3xl border border-green-200 bg-green-50 p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-stone-900">
          Enquiry sent
        </h2>
        <p className="mt-4 leading-7 text-stone-700">
          Thank you. Your enquiry has been sent successfully. Tim Bourke &
          Associates will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm"
    >
      <h2 className="text-2xl font-semibold text-stone-900">
        Send an enquiry
      </h2>

      <div className="mt-6 grid gap-6">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-stone-700"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-green-700"
            placeholder="Your name"
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className="mt-2 text-sm text-red-600"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-stone-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-green-700"
            placeholder="Your email address"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="mt-2 text-sm text-red-600"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-stone-700"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-green-700"
            placeholder="Your phone number"
          />
          <ValidationError
            prefix="Phone"
            field="phone"
            errors={state.errors}
            className="mt-2 text-sm text-red-600"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-medium text-stone-700"
          >
            Enquiry type
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-green-700"
          >
            <option value="" disabled>
              Select an enquiry type
            </option>
            <option value="agricultural-advisory">Agricultural Advisory</option>
            <option value="environmental-consultancy">
              Environmental Consultancy
            </option>
            <option value="equine-services">Equine Services</option>
            <option value="farm-consultancy">Farm Consultancy</option>
            <option value="prostep">Prostep Supplements</option>
            <option value="general">General Enquiry</option>
          </select>
          <ValidationError
            prefix="Service"
            field="service"
            errors={state.errors}
            className="mt-2 text-sm text-red-600"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-stone-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="w-full rounded-xl border border-stone-300 px-4 py-3 outline-none transition focus:border-green-700"
            placeholder="Tell us how we can help"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="mt-2 text-sm text-red-600"
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting || !formId}
          className="rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state.submitting ? "Sending..." : "Send Enquiry"}
        </button>

        {!formId && (
          <p className="text-sm text-red-600">
            Form is not configured yet. Add the Formspree form ID to
            <code className="mx-1 rounded bg-stone-100 px-1 py-0.5">
              .env.local
            </code>
            and restart the dev server.
          </p>
        )}
      </div>
    </form>
  );
}