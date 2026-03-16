import React, { useState } from 'react';
import backgroundImg from '../assets/homeimg.webp'
import { motion } from 'framer-motion'
import { slideUpVariants , zoomInVariants } from './animation';

const Hero = () => { 

    const [showMore, setShowMore] = useState(false);

    return (
        <div 
        id='hero' 
        className='bg-black w-full min-h-[700px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[150px] px-[20px] flex justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center' 
        style={{backgroundImage: `url(${backgroundImg})` }}
        >

           <motion.div 
           initial="hidden"
           whileInView="visible"
           variants={slideUpVariants}
           className='lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-4'
           >

            <motion.h1
                variants={slideUpVariants}
                className='text-pink-500 text-2xl'
            >
                QUALITY BUILDS WITHOUT THE BUDGET SURPRISES
            </motion.h1>

            <motion.h1
                variants={slideUpVariants}
                className='text-white uppercase text-[32px] sm:text-[40px] lg:text-[50px] font-bold'
            >
                BUILT PROPERLY. PRICED PROPERLY. FROM DAY ONE.
            </motion.h1>

            <div className='w-[120px] h-[6px] bg-pink-500'></div>

            <p className='text-white text-[20px] leading-relaxed'>
                <strong>Why do so many building projects go wrong?</strong>
            </p>

            <p className='text-white text-[18px] leading-relaxed'>
                The quote changes. The contractor disappears. The deadline keeps moving. 
                Unfortunately, this is the reality for many people when it comes to building projects.
            </p>

            {showMore && (
                <>
                    <p className='text-white text-[18px] leading-relaxed'>
                        Building itself isn’t complicated — but it often becomes difficult when contractors 
                        underestimate costs, cut corners to save money, or are simply hard to reach.
                    </p>

                    <p className='text-white text-[18px] leading-relaxed'>
                        Thankfully, it doesn’t have to be that way.
                    </p>

                    <p className='text-white text-[18px] leading-relaxed'>
                        What you need is someone who <strong>calculates instead of guessing</strong>. 
                        With over <strong>13 years of experience in construction</strong>, I’ve built my 
                        business around accuracy, reliability, and clear communication from start to finish.
                    </p>
                </>
            )}

            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={zoomInVariants}
                className='flex justify-normal items-center gap-5 mt-4'
            >

               <motion.button
    variants={zoomInVariants}
    onClick={() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }}
    className='bg-pink-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg text-black font-bold'
>
    REACH US
</motion.button>

                <motion.button
                    variants={zoomInVariants}
                    onClick={() => setShowMore(!showMore)}
                    className='border-white hover:border-pink-500 hover:text-pink-500 border-2 px-10 py-3 rounded-lg text-white font-bold'
                >
                    {showMore ? "READ LESS" : "READ MORE"}
                </motion.button>

            </motion.div>

           </motion.div>

        </div>
    );
};

export default Hero;