import React, { useState } from 'react';
import { FaXmark, FaBars } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navItem = [
        { link: 'Home', path: 'home' },
        { link: 'About', path: 'about' },
        { link: 'Services', path: 'services' },
        { link: 'Project', path: 'projects' },
        { link: 'Contact', path: 'contact' },
    ];

    return (
        <nav className='w-full flex bg-white justify-between items-center gap-1 lg:px-16 px-6 py-4 top-0 z-50'>
            <h1 className='text-black md:text-4xl text-3xl font-bold font-rubik'>
<h1 className='text-black md:text-4xl text-3xl font-bold font-rubik'>
    BARNES <span className='text-pink-500 italic'>DEVELOPMENTS</span>
</h1>
            </h1>
            {/* Desktop Menu */}
            <ul className='lg:flex justify-normal items-center gap-6 hidden'>
                {navItem.map((item, index) => (
                    <li key={index}>
                        <Link
                            to={item.path}
                            className='text-black uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-pink-500 hover:text-black text-[16px]'
                            spy={true}
                            offset={-100}
                            smooth={true}
                        >
                            {item.link}
                        </Link>
                    </li>
                ))}
            </ul>
            <button className='bg-pink-500 hover:bg-black text-black hover:text-white px-10 py-3 rounded-full font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden'>REACH US</button>

            {/* Mobile Menu Toggle Icon */}
            <div className='flex justify-between items-center lg:hidden mt-3' onClick={toggleMenu}>
                {isMenuOpen ? (
                    <FaXmark className='text-pink-500 text-3xl cursor-pointer' />
                ) : (
                    <FaBars className='text-pink-500 text-3xl cursor-pointer' />
                )}
            </div>

            {/* Mobile Menu */}
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-pink-500 p-4 absolute top-[72px] left-0`} onClick={closeMenu}>
                <ul className='flex flex-col justify-center items-center gap-2 w-full'>
                    {navItem.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.path}
                                className='text-black uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white w-full text-center'
                                spy={true}
                                offset={-100}
                                smooth={true}
                            >
                                {item.link}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Header;
