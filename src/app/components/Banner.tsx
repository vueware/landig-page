"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const Banner = () => {
  const [isBannerVisible, setBannerVisible] = useState(false);

  useEffect(() => {
    Cookies;
    const cookieConsent = Cookies.get("cookie-consent");
    if (!cookieConsent) {
      setBannerVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookie-consent", "true", { expires: 365 }); // Set for year
    setBannerVisible(false);
  };

  if (!isBannerVisible) return null;

  return (
    <div className="fixed bottom-0 w-full text-black z-50">
      <div className="mx-auto max-w-4xl animate-fade-up animate-once animate-delay-300">
        <div className="bg-white m-4 rounded-lg shadow-xl  flex justify-between items-center p-6">
          <p className="text-sm sm:text-base font-semibold leading-2 pr-4">
            We use cookies to improve your experience on our site. 🍪
          </p>
          <button
            onClick={acceptCookies}
            className="rounded-full bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
