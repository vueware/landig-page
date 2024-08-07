export default function Page() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 h-screen">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div
        aria-hidden="true"
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <img alt="Vueware" src="/logo.png" className="h-16" />
          <div className="mt-8">
            <a
              href="https://github.com/vueware/landig-page"
              className="inline-flex space-x-6"
              target="_blank"
            >
              <span className="rounded-full bg-aqua/10 px-3 py-1 text-sm font-semibold leading-6 text-aqua ring-1 ring-inset ring-aqua/20">
                What's new
              </span>
              <span className="inline-flex items-center space-x-1 text-sm font-medium leading-6 text-white/75 hover:text-white transition">
                <span>Just released v0.1</span>
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Empowering by digital intelligence
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="mailto:hello@vueware.io"
              className="rounded-md bg-indigo px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-hyacinth focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hyacinth transition"
            >
              Stay in touch
            </a>
            <a
              href="https://github.com/vueware"
              target="_blank"
              className="text-sm font-semibold leading-6 text-white/75 hover:text-white transition"
            >
              Github <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
