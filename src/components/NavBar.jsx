

import {FaBars, FaDribbble, FaFacebook, } from 'react-icons/fa';
import { FaSquareXTwitter, FaXmark } from "react-icons/fa6";
import { useState } from 'react';

const Navbar = () => {

const [menuOpen , setMenuOpen] = useState(false);

const toggleMenu = () => {
    setMenuOpen(!menuOpen);
}



  return (
    <header className=' text-white'>


      <nav className='px-4 py-4 mx-auto max-w-7xl flex justify-between items-center'>
        <a className='text-3xl text-white font-bold' href="/">CurrencyConverter</a> 
        <ul className='md:flex gap-12 text-lg hidden'>
          {/* {navItems.map(({ path, link }, index) => (
            <li className='text-white' key={index}>
              <NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
              to={path}>{link}</NavLink>
            </li>
          ))} */}
        </ul>

        <div className='text-white lg:flex gap-4 items-center hidden'>
            <a href="/" className='hover:text-blue-950'><FaFacebook/></a>
            <a href="/" className='hover:text-blue-950'><FaDribbble/></a>
            <a href="https://twitter.com/im_sajidkhn" className='hover:text-blue-950'><FaSquareXTwitter /></a>
            <button className='text-white border border-blue-950 hover:bg-blue-950 px-8 py-2 text-lg rounded-[26.50px] hover:bg-white
             hover:text-white transition-all duration-200 ease-in '><a href="https://sajidkhan-dev.github.io/Personal-Portfolio-with-React/">Portfolio</a></button>
        </div>

        <div className='md:hidden'>
            <button onClick={toggleMenu} className='cursor-pointer'>
                {
                    menuOpen ? <FaXmark className='w-5 h-5'/> : <FaBars className='w-5 h-5'/>
                }
                </button>
        </div>

        {/* menu items only for mobile*/}
        {/* <div>
        <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-16 bg-white ${menuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
          {navItems.map(({ path, link }, index) => (
            <li className='text-black' key={index}>
              <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
