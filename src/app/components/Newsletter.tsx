const Newsletter = () => {
  return (
    <div>
      <h3 className="text-base font-semibold leading-7 text-secondary">
        No spam
      </h3>
      <h2 className="text-3xl font-bold tracking-tight">
        Subscribe to our newsletter<span className="text-primary">.</span>
      </h2>
      <form className="mt-4 max-w-md">
        <div className="flex gap-x-4">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            autoComplete="email"
            className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          />
          <button
            type="submit"
            className="flex-none rounded-full bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition"
          >
            Subscribe
          </button>
        </div>
        <p className="mt-0.5 ml-0.5 text-xs leading-6 text-black/75">
          We care about your data, read our{" "}
          <a
            href="#"
            className="font-semibold text-primary hover:text-secondary transtion"
          >
            privacy&nbsp;policy
          </a>
          .
        </p>
      </form>
    </div>
  );
};

export default Newsletter;
