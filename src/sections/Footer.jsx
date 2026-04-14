import React from 'react';
import { FaInstagram, FaWhatsapp, FaArrowUp, FaPhone, FaEnvelope } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <footer className='bg-gray-900 text-white py-6 relative'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center gap-4'>
                
                {/* Brand */}
                <h1 className='text-xl md:text-2xl font-bold'>
                    BARNES <span className='text-pink-500 italic'>DEVELOPMENTS</span>
                </h1>
                
                {/* Contact Info */}
                <div className='flex flex-col items-center gap-2 text-sm'>
                    
                    {/* Phone */}
                    <a
                        href='tel:+27659507900'
                        className='flex items-center gap-2 hover:text-pink-500 transition'
                    >
                        <FaPhone />
                        +27 65 950 7900
                    </a>

                    {/* Email */}
                    <a
                        href='mailto:info@barnesdev.co.za'
                        className='flex items-center gap-2 hover:text-pink-500 transition'
                    >
                        <FaEnvelope />
                        Barnesdevelopment1@gmail.com
                    </a>

                </div>

                {/* Social Links */}
                <div className='flex gap-6'>
                    
                    <a
                        href='https://www.instagram.com/barnes_developments/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-pink-500 transition-colors duration-300'
                    >
                        <FaInstagram size={24} />
                    </a>

                    <a
                        href='https://wa.me/27659507900'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-green-500 transition-colors duration-300'
                    >
                        <FaWhatsapp size={24} />
                    </a>

                </div>

                {/* Copyright */}
                <p className='text-sm'>
                    &copy; {new Date().getFullYear()} Barnes Developments. All rights reserved.
                </p>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className='fixed bottom-8 right-8 bg-pink-500 text-black p-3 rounded-full shadow-lg hover:bg-black hover:text-white transition-colors duration-300'
                aria-label='Scroll to top'
            >
                <FaArrowUp size={20} />
            </button>
        </footer>
    );
};

export default Footer;