const Hero = () => {
  return (
    <div className="py-8">
      <h4 className="text-base font-semibold leading-7 text-secondary">
        What we do
      </h4>
      <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-black">
        Empowering by digital intelligence
      </h2>
      <p className="mt-4 text-lg leading-8 text-black/75">
        We provide businesses with tailored software solutions that optimize,
        automate, and digitize processes, while offering comprehensive data
        insights and analysis for enhanced decision-making.
      </p>
      <div className="mt-8 flex items-center gap-x-6">
        <a
          href="#contact"
          className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition"
        >
          Get in touch
        </a>
        <a
          href="https://github.com/vueware/landig-page"
          target="_blank"
          className="text-sm font-semibold leading-6 text-black hover:text-secondary transition mt-1"
        >
          We ❤️ Open Source <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
