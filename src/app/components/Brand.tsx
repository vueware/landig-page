const Brand = (props: any) => {
  const { slogan } = props;
  return (
    <div className="flex items-center gap-x-2">
      <img alt="Vueware" src="/logo.png" className="-ml-1 h-12 sm:h-16" />
      <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-black">
        Vueware
      </h2>
    </div>
  );
};

export default Brand;
