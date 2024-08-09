import Brand from "./components/Brand";
import Social from "./components/Social";
import Dictionary from "./components/Dictionary";
import Footer from "./components/Footer";
import Partners from "./components/Partners";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Banner from "./components/Banner";

const Page = () => {
  return (
    <section className="h-screen bg-white text-black relative isolate ">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0ea5e9] to-[#8857f8] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      {/* Main */}
      <div className="mx-auto max-w-4xl p-6 lg:p-8 animate-fade animate-once animate-delay-100">
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
      {/* Cookies */}
      <Banner />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#0ea5e9] to-[#8857f8] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </section>
  );
};

export default Page;
