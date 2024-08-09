import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Newsletter from "./Newsletter";

const Contact = () => {
  return (
    <div id="contact" className="py-8 grid grid-cols-1 sm:grid-cols-2 gap-y-16">
      <div>
        <h3 className="text-base font-semibold leading-7 text-secondary">
          Get in touch
        </h3>
        <h2 className="text-3xl font-bold tracking-tight">
          Don't be a stranger<span className="text-primary">.</span>
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
            <dd className="font-semibold">
              <a
                href="https://www.google.nl/maps/place/Vriezenveen/@52.4359593,6.5531393,12z/data=!3m1!4b1!4m6!3m5!1s0x47b800c92922aec1:0xebba6884fbe002c2!8m2!3d52.4085238!4d6.6146301!16s%2Fm%2F025rq2_?entry=ttu"
                target="_blank"
                className="hover:text-primary transition"
              >
                Vriezenveen, The Netherlands
              </a>
            </dd>
          </div>
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Telephone</span>
              <PhoneIcon aria-hidden="true" className="h-7 w-6 text-black/25" />
            </dt>
            <dd>
              <a
                href="tel:+31616545906"
                className="font-semibold hover:text-secondary transition"
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
      <Newsletter />
    </div>
  );
};

export default Contact;
