const Footer = () => {
  return (
    <footer className="flex justify-between items-center mt-8 border-t border-black/5 pt-4 text-xs text-black">
      <p className="leading-5 text-black/75">Vueware — Digital Intelligence</p>
      <div className="flex gap-x-2 sm:gap-x-4">
        <a href="/" className="hover:text-primary transition">
          Cookies
        </a>
        <a href="/" className="hover:text-secondary transition">
          Privacy
        </a>
        <a href="/" className="hover:text-primary transition">
          Terms
        </a>
      </div>
    </footer>
  );
};

export default Footer;
