import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  return (
    <div id="contact" className="py-8">
      <div className="max-w-xl lg:mx-0 lg:max-w-lg">
        <h4 className="text-base font-semibold leading-7 text-secondary">
          Get in touch
        </h4>
        <h2 className="text-3xl font-bold tracking-tight">
          Don't be a stranger
        </h2>
        <dl className="mt-4 space-y-4 text-bold leading-7 text-black/75">
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Address</span>
              <MapPinIcon
                aria-hidden="true"
                className="h-7 w-6 text-black/25"
              />
            </dt>
            <dd className="font-semibold">Vriezenveen, The Netherlands</dd>
          </div>
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Telephone</span>
              <PhoneIcon aria-hidden="true" className="h-7 w-6 text-black/25" />
            </dt>
            <dd>
              <a
                href="tel:+31616545906"
                className="font-semibold hover:text-primary transition"
              >
                +31 (0)6 165 45 906
              </a>
            </dd>
          </div>
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Email</span>
              <EnvelopeIcon
                aria-hidden="true"
                className="h-7 w-6 text-black/25"
              />
            </dt>
            <dd>
              <a
                href="mailto:hello@vueware.io"
                className="font-semibold hover:text-primary transition"
              >
                hello@vueware.io
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Contact;
