// DisclaimerSection.jsx
import React from "react";

const DisclaimerSection = () => {
  return (
    <section className="w-full bg-black border-t border-black py-16 px-6 md:px-24 flex justify-center">
      <div className="max-w-3xl text-center">
        
        {/* BIG TITLE (matches Contact heading style) */}
        <h2 className="uppercase text-white text-2xl font-bold tracking-wide text-center mb-2">
          Disclaimer
        </h2>

        {/* SUB TITLE (pink like Contact Us) */}
        <p className="uppercase text-pink-500 text-2xl font-bold tracking-wide text-center mb-4">
          Honesty About the Numbers
        </p>

        <div className="w-[120px] h-[6px] bg-pink-500 mx-auto mb-6"></div>

        {/* Content */}
        <p className="text-white text-base md:text-lg leading-relaxed">
          Your quote is valid for only <span className="font-semibold">30 days</span> from the date it's issued. 
          After that, it may be subject to adjustment due to supplier price increases, something that affects 
          every builder in the industry. We&apos;ll always notify you of any changes before proceeding, so you&apos;re 
          never caught off guard.
        </p>

      </div>
    </section>
  );
};

export default DisclaimerSection;