import React from 'react';
import { NavLink } from 'react-router-dom';
import New from './New';
import { useState } from 'react';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className='navbar'>
    <header className='bg-white text-black border-y-2 border-black'>
      <div className='bg-black w-full h-6 text-white flex items-center justify-center'>
        Sale is on! 25% off sitewide using TEES25 at checkout
      </div>

      <nav className='flex flex-col md:flex-row md:h-auto w-full md:w-32'>
        <div className='logo box-border md:h-19 px-20  md:w-40 py-6 md:px-16 border-e-2 border-black bg-[#d6ff38] md:inline-block  pl-12 '>
          <a href='#'>Logo</a>
        </div>
        <div className='flex items-center'>
          <ul className={`md:flex items-center ${showDropdown ? '' : 'hidden'}`}>
            <li className='box-border w-full md:w-30 py-6 px-12 border-e-2 text-black hover:bg-black hover:text-[#d6ff38] border-black'>
              <NavLink to='/new'>New</NavLink>
            </li>
            <li className='box-border h-auto w-full md:w-22 py-6 px-12 border-e-2 text-black hover:bg-black hover:text-[#d6ff38] border-black'>
              <NavLink to="/women">Women</NavLink>
            </li>
            <li className='box-border h-auto w-full py-6 px-14 border-e-2 text-black hover:bg-black hover:text-[#d6ff38] border-black'>
              <NavLink to="/men">Men</NavLink>
            </li>
            <li className='md:w-full md:ml-8'>
              <button className='text-black w-full md:w-16 ml-3 '>Sign in</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
    
    );
};

export default Header;
