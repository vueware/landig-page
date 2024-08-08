const Dictionary = () => {
  return (
    <div className="py-8 max-w-2xl lg:mx-0 lg:flex-auto">
      <h3 className="text-base font-semibold leading-7 text-secondary">
        The explanation
      </h3>
      <h1 className="max-w-lg text-4xl font-bold tracking-tight text-black font-serif">
        Vue·​ware
        <span className="ml-2 text-lg font-mono text-primary">noun</span>
      </h1>
      <div className="mt-2 border-l border-primary pl-8">
        <blockquote className="text-lg leading-8 text-black/75">
          <p>
            “The word combines{" "}
            <span className="font-semibold text-black">vue</span>, meaning
            vision and insight, with{" "}
            <span className="font-semibold text-black">ware</span>, representing
            software. Vueware provides companies with tailored software that
            delivers deep insights, enabling them to focus on their core
            strengths and excel in what they do best. As a no-nonsense company,
            we are straightforward and honor our commitments.”
          </p>
        </blockquote>
      </div>
    </div>
  );
};

export default Dictionary;
