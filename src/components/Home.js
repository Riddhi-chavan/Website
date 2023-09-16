import React from 'react';
import './style.css';


const Home = () => {
  return (
    <>
      <div>
        <h1 className='hero-2'>Trade in offer</h1>
        <h4 className='hero-1'>There’s One for Everyone</h4>
      </div>
      <div className='flex flex-row mt-10   justify-between'>
    <img src='https://media.discordapp.net/attachments/1151586030420504629/1151960648687816815/hero-woemen.jpg' classNameName='image1  w-1/4 h-auto ' alt='1'/>
    <img src='https://media.discordapp.net/attachments/1151586030420504629/1151960649040146503/hero-tshirt.jpg' classNameName='image2 mr-2 w-1/2 h-auto' alt='2'/>
    <img src='https://media.discordapp.net/attachments/1151586030420504629/1151960649509904384/hero-men.jpg' classNameName=' image3 w-1/4 h-auto' alt='3'/>
</div>

      <div className='new-drop'>
        <h2> NEW DROP</h2>
        <div>
          <div className="product w-64  bg-white  shadow-md overflow-hidden transform transition-transform hover:scale-105">
            <div className="overflow-hidden">
              <img src="https://placekitten.com/400/300" alt="Product Image" className="product-1 w-full h-auto transform scale-100 hover:scale-110 transition-transform" />
            </div>
            <div className="p-4">
              <h2 className="product-na text-xl font-semibold">Product Name</h2>
              <p className="text-gray-700 mt-2">$99.99</p>
            </div>
          </div>        </div>
      </div>
    </>
  )
}

export default Home
