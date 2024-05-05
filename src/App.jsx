import React from 'react'

export default function App() {
  return (
    <>
      {/* Global container */}
      <div className='flex items-center justify-center min-h-screen bg-slate-100'>
        {/* Card container */}
        <div className='flex flex-col p-6 m-3 space-y-10 rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16 bg-white'>
          {/* Image container */}
          <div>
            <img src="/src/pic/headphone.jpg" className='w-60 mx-auto hover:scale-105 duration-200' alt="" />
          </div>
          {/* Content container */}
          <div className='flex flex-col space-y-6'>
            {/* label and description */}
            <div className='flex flex-col space-y-3 mb-4 text-center md:text-left'>
              <div>
                <div className='inline-block py-1 px-2 text-white rounded-full text-sm bg-black'>Free Shipping</div>
              </div>
              <div className=' max-w-sm text-2xl font-semibold'>Razer Kraken Kitty Edt Gaming Headset Quartz</div>
            </div>

            {/* Price */}
            <div className='flex flex-col space-y-3 mb-4 text-center md:text-left'>
                <div className=' line-through'>$700</div>
                <div className='text-5xl font-semibold'>$599</div>
                <p className='text-gray-400 font-light text-sm'>The offer is valid until April 3 or until the stocks lasts!</p>
            </div>
            {/* button container */}
            <div>
              <button className=' w-full border py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-sm duration-300'>Add to Cart</button>
            </div>
            {/* Stock container */}
            <div className='flex items-center group'>
              <div className='w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping'></div>
              <div className='ml-4 text-sm'>50 + pcs. in Stock</div>
            </div>

            {/* buttons container */}
            <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
              <button className=' border-2 border-gray-300 rounded-lg shadow-sm hover:shadow-lg hover:bg-opacity-30 transition-all hover:-translate-y-0.5 px-5 py-3 duration-200'>Add to Cart</button>
              <button className=' border-2 border-gray-300 rounded-lg shadow-sm hover:shadow-lg hover:bg-opacity-30 transition-all hover:-translate-y-0.5 px-5 py-3 duration-200'>Add to wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
