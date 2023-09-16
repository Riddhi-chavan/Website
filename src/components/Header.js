import React from 'react'
import { NavLink } from "react-router-dom"
import New from './New'


const Header = () => {

  return (
    <> <div className='navbar'>
      <header className='bg-white text-black border-y-2 border-black '>
        <div class="bg-black w-full h-6 text-white flex items-center justify-center">
          Sale is on! 25% off sitewide using TEES25 at checkout
        </div>
        
          <nav className='flex justify-between'>
            <div className= ' logo box-border h-19 w-34  py-6 px-16  border-e-2 border-black bg-[#d6ff38]'>
              <a href='#' >Logo</a>
            </div>
            <div className='flex items-center  '>
              <ul className='flex items-center '>
                <li className="box-border h-19 w-34  py-6 px-16  border-e-2 text-black   hover:bg-black hover:text-[#d6ff38] border-black">
                  <NavLink to='/new'>New</NavLink>
                </li>
                <li className=" box-border h-19 w-34  py-6 px-16  border-e-2 text-black hover:bg-black hover:text-[#d6ff38] border-black  ">
                  <NavLink to="#">Women</NavLink>
                </li>
                <li className="box-border h-19 w-34  py-6 px-16 border-e-2  text-black hover:bg-black  hover:text-[#d6ff38] border-black  ">
                  <NavLink to="#">Men</NavLink>
                </li>
              </ul>
            </div>
            <div className=''>
              <button className='bg-white text-black px-9 py-2 rounded-full  mx-7'>Sign in</button>
            </div>
          </nav>
       
      </header>
      </div>
    </>
  )
}

export default Header
