// DisclaimerSection.jsx
import React from "react";
import { motion } from "framer-motion";

const DisclaimerSection = () => {
  return (
    <section className="w-full bg-black border-t border-black py-16 px-6 md:px-24 flex justify-center">
      <div className="max-w-3xl text-center">
        
        <motion.h1 className="text-5xl font-bold text-white uppercase">
          Disclaimer
        </motion.h1>
text-5xl font-bold text-white uppercase
        <motion.h1 className="uppercase text-pink-500 text-2xl">
          Honesty About the Numbers
        </motion.h1>

        <div className="w-[120px] h-[6px] bg-pink-500 mx-auto mb-6"></div>

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