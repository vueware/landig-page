const Partners = () => {
  return (
    <div className="py-8 mx-auto max-w-2xl lg:max-w-none">
      <h3 className="text-base font-semibold leading-7 text-secondary">
        Our friends
      </h3>
      <h2 className="text-3xl font-bold tracking-tight text-black">
        Trusted by the most innovative companies
      </h2>
      <div className="flex mt-4">
        <img
          alt="Google"
          src="/google.png"
          className="max-h-24 opacity-25 w-full object-contain object-left hover:opacity-100 transition"
        />
        <img
          alt="Talpa"
          src="/talpa.png"
          className="max-h-24 opacity-25 w-full object-contain object-left hover:opacity-100 transition"
        />
        <img
          alt="AVRO TROS"
          src="/avro.png"
          className="max-h-24 opacity-25 w-full object-contain object-left hover:opacity-100 transition"
        />
      </div>
    </div>
  );
};

export default Partners;
