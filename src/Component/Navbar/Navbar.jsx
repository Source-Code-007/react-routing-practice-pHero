import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    let [nav, setNav] = useState(false)
    let navData = [
        { link: 'Home', path: '/home', },
        { link: 'About', path: '/about', },
        { link: 'Contact', path: '/contact', },
        { link: 'Chart', path: '/chart', },
        { link: 'Services', path: '/services', }
    ]
    return (
        <nav className='bg-slate-800 text-slate-50 font-semibold text-xl py-4'>
            <div className='max-w-7xl mx-auto px-4 md:px-0 flex justify-between'>
                <div className="nav-left flex items-center">
                    <Link to='/' className='cursor-pointer'>React routing</Link>
                </div>
                <div className='nav-right relative'>
                    <span onClick={() => setNav(!nav)} className='flex justify-center md:hidden'>
                        {
                            nav ? <XMarkIcon className='h-8 w-8'></XMarkIcon> : <Bars3Icon className='h-8 w-8'></Bars3Icon>
                        }
                    </span>
                    <ul className={`md:flex gap-4 md:static duration-700 absolute ${nav ? 'right-10' : '-right-52'} top-10 bg-slate-800 rounded-lg`}>
                        {
                            navData.map((nav, idx) => <li className='block px-5 py-2' key={idx}><NavLink className='block' to={nav.path}>{nav.link}</NavLink></li>)
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};


export default Navbar;