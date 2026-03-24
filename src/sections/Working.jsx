import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { planning } from '../export';

const Working = () => {
    return (
        <div id='working' className='w-full bg-white'>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={slideUpVariants}
                className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'
            >
                <motion.h3
                    variants={slideUpVariants}
                    className='text-pink-500 text-2xl uppercase text-center'
                >
                    How A Proper Build Should Start
                </motion.h3>

                <motion.h2
                    variants={slideUpVariants}
                    className='uppercase text-black text-5xl font-bold text-center'
                >
                    Our Method
                </motion.h2>

                <motion.div
                    variants={zoomInVariants}
                    className='w-[120px] h-[6px] bg-pink-500'
                />

                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    variants={zoomInVariants}
                    className='w-full grid lg:grid-cols-4 grid-cols-1 gap-[20px] items-stretch mt-[30px]'
                >
                    {planning.map((item, index) => (
                        <div
                            key={index}
                            className='flex flex-col justify-between items-center gap-5 border-2 border-pink-500 rounded-md p-6 h-full text-center'
                        >
                            {/* Icon */}
                            <div>
                                <item.icon className='size-[80px] bg-pink-500 hover:bg-black hover:fill-white p-4 rounded-full cursor-pointer transition-all' />
                            </div>

                            {/* Title */}
                            <h1 className='text-2xl font-bold uppercase'>
                                {item.title}
                            </h1>

                            {/* Description */}
                            <p className='text-[18px] text-gray-600 flex-grow'>
                                {item.about}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Working;