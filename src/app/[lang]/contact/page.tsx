// src/app/[lang]/contact/page.tsx
import { getDictionary } from '@/lib/dictionaries';
import { Locale } from '@/lib/i18n-config';
import { Building, Phone, Mail } from 'lucide-react';

export default async function ContactPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { contactPage, footer } = await getDictionary(lang);
  const langKey = lang as 'en' | 'bn';

  return (
    <div className="bg-white">
      {/* --- Section 1: Hero --- */}
      <div className="relative isolate bg-gray-50">
        <div className="mx-auto max-w-7xl py-24 sm:py-32 px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {contactPage.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {contactPage.subtitle}
          </p>
        </div>
      </div>

      {/* --- Section 2: Contact Info (Full Width) --- */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            {contactPage.office}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {footer.contact.addressValue}
          </p>
          
          <dl className="mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-16">
            <div className="flex flex-col items-center">
              <dt className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600">
                <Building className="h-6 w-6 text-white" />
              </dt>
              <dd className="mt-4 text-base leading-7 text-gray-600">
                <span className="font-semibold">{contactPage.address}</span><br/>
                {footer.contact.addressValue}
              </dd>
            </div>
            <div className="flex flex-col items-center">
              <dt className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600">
                <Phone className="h-6 w-6 text-white" />
              </dt>
              <dd className="mt-4 text-base leading-7 text-gray-600">
                <span className="font-semibold">{contactPage.phone}</span><br/>
                <a href={`tel:${footer.contact.phoneValue}`} className="hover:text-green-700">
                  {footer.contact.phoneValue}
                </a>
              </dd>
            </div>
            <div className="flex flex-col items-center">
              <dt className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600">
                <Mail className="h-6 w-6 text-white" />
              </dt>
              <dd className="mt-4 text-base leading-7 text-gray-600">
                <span className="font-semibold">{contactPage.email}</span><br/>
                <a href={`mailto:${footer.contact.emailValue}`} className="hover:text-green-700">
                  {footer.contact.emailValue}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* --- Section 3: Google Map (Full Width) --- */}
      <div className="w-full h-96 lg:h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.3926441589306!2d88.80304037592259!3d23.518376197643356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fed3000857ab65%3A0x205f5efe45535fe5!2sAIRN%20AGRO!5e0!3m2!1sen!2sbd!4v1763058541355!5m2!1sen!2sbd" // <-- YOUR REAL LINK
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}