import React from 'react'
import './style.css';

const footer = () => {
  return (
    <>
     <div className='border-b-2 border-black flex'>
          <div className='bg-black w-4/12 h-72 text-white flex flex-col justify-center'>
            <div className='text-center  text-2xl font-bold'>
              T SHOP
            </div>
            <div className='pt-10 text-center'>
              info124@gmail.com
            </div>
            <div className='text-center'>
              Tel: 123-565-7988
            </div>
          </div>
          <div className='mt-16'>
            <div className='text-center pb-2 text-xl  flex space-x-36 ml-40 '>
              <div>
                Shop
              </div>
              <div>
                Our Store
              </div>
              <div>
                Terms & Conditions
              </div>
            </div>
            <div className='flex space-x-36  mt-3'>
              <div className=' pb-2   ml-40' >
                <div>
                  <div>
                    <button>New</button>
                  </div>
                  <div>
                    <button>Women</button>
                  </div>
                  <div>
                    <button>Men</button>
                  </div>
                </div>
              </div>
              <div className=' pb-2  ' >
                <div>
                  <div>
                    <button>About Us</button></div>
                  <div>
                    <button>Subscribe</button>
                  </div>
                  <div>
                    <button>Men</button>
                  </div>
                </div>
              </div>
              <div className=' pb-2 pl-2 ' >
                <div>
                  <div>
                    <button>Store Policy
                    </button></div>
                  <div>
                    <button>Shipping & Returns</button>
                  </div>
                  <div>
                    <button>Payment Methods </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className='border-b-2 border-black flex'>
        <div className='flex pl-40 py-5 space-x-3  '>
          <img src='https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_27,h_27,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0fdef751204647a3bbd7eaa2827ed4f9.png' />
          <img src='https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_27,h_27,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/01c3aff52f2a4dffa526d7a9843d46ea.png' />
          <img src='https://static.wixstatic.com/media/78aa2057f0cb42fbbaffcbc36280a64a.png/v1/fill/w_27,h_27,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/78aa2057f0cb42fbbaffcbc36280a64a.png' className='youtube'/>
        
        </div>
        <div className=' bg-[#d6ff38]  w-full pt-4 pl-10 ml-20 text-center border-x-2 border-black'>
          © 2035 by T Shop. Powered and secured by Wix
        </div>
      </div>

    </>
  )
}

export default footer
