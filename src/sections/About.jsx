import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const About = () => {

    const [showMore, setShowMore] = useState(false);

    return (
        <div 
            id='about' 
            className='relative lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]'
        >

            {/* LEFT SIDE */}
            <motion.div
                initial='hidden'
                whileInView='visible'
                variants={slideUpVariants}
                className='relative z-10 lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'
            >
                <motion.h1
                    variants={slideUpVariants}
                    className='uppercase text-pink-500 text-2xl'
                >
                    Welcome to
                </motion.h1>

                <motion.h1
                    variants={slideUpVariants}
                    className='text-4xl sm:text-5xl font-bold text-white uppercase'
                >
                    Barnes Developments
                </motion.h1>

                <div className='w-[120px] h-[6px] bg-pink-500'></div>

                <p className='text-2xl sm:text-3xl italic text-gray-50 mt-[40px]'>
                    Your Trusted Construction Partner for Over 13 Years
                </p>
            </motion.div>


            {/* RIGHT SIDE */}
            <motion.div
                initial='hidden'
                whileInView='visible'
                variants={slideUpVariants}
                className='relative z-10 lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'
            >

                <p className='text-pink-500 text-lg font-semibold'>
                    (NHBRC Accredited)
                </p>

                <h3 className='text-white text-2xl font-bold'>
                    A Quantity Surveyor Who Actually Builds
                </h3>

                {/* Short intro */}
                <p className='text-white text-lg leading-relaxed text-justify'>
                    I'm a qualified Quantity Surveyor with 13 years of experience building homes across Cape Town.
                    Every project is carefully planned and costed before construction begins.
                </p>

                {/* Hidden content */}
                {showMore && (
                    <>
                        <p className='text-white text-lg leading-relaxed text-justify'>
                            Before a single brick is laid, every material, labour cost, and contingency is calculated line by line.
                            Most cost overruns happen during the quoting stage when contractors underestimate to win the job.
                        </p>

                        <p className='text-white text-lg leading-relaxed text-justify'>
                            I price properly from the start — which is why my quotes don’t suddenly change later.
                        </p>

                        <ul className='text-white text-lg mt-4 space-y-2'>
                            <li>✔ Qualified Quantity Surveyor</li>
                            <li>✔ 13 Years Experience</li>
                            <li>✔ New Builds & Renovations</li>
                            <li>✔ Quote Valid for 30 Days</li>
                        </ul>
                    </>
                )}

                {/* BUTTON */}
                <motion.button
                    variants={zoomInVariants}
                    onClick={() => setShowMore(!showMore)}
                    className='cursor-pointer bg-pink-500 hover:bg-white text-white hover:text-black py-3 px-10 rounded-md font-bold active:scale-95 transition-all duration-150'
                >
                    {showMore ? "Show Less" : "Learn More"}
                </motion.button>

            </motion.div>

        </div>
    );
};

export default About;