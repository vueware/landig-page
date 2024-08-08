import Brand from "./components/Brand";
import Social from "./components/Social";
import Dictionary from "./components/Dictionary";
import Footer from "./components/Footer";
import Partners from "./components/Partners";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

const Page = () => {
  return (
    <section className="h-screen bg-white text-black">
      {/* Main */}
      <div className="mx-auto max-w-4xl p-6 lg:p-8">
        {/* Header */}
        <header className="w-full flex justify-between items-center">
          <a href="/">
            <Brand />
          </a>
          <Social />
        </header>
        {/* Content */}
        <Hero />
        <Dictionary />
        <Partners />
        <Contact />
        <Footer />
      </div>
    </section>
  );
};

export default Page;
