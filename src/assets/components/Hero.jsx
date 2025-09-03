import React from 'react'
import picture from "../images/Rectangle.svg"
import { NavLink } from 'react-router'

export default function Hero() {
  return (
    <section className='bg-[#f2f0f1] relative max-w-screen-2xl mx-auto min-h-screen lg:min-h-[600px]'>
        {/* Background Image */}
        <img 
            src={picture} 
            alt="Fashion model showcase" 
            className='absolute inset-0 w-full h-full object-cover'
        />
        
        {/* Content Overlay */}
        <div className='relative z-10 h-full min-h-screen lg:min-h-[600px] flex items-center'>
            <div className='px-4 sm:px-8 md:px-16 lg:px-32 py-8 sm:py-12 md:py-16 lg:py-20'>
                <h1 className='text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 lg:mb-5 font-CF leading-tight text-black  drop-shadow-lg'>
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                </h1>
                <p className='mb-6 lg:mb-5 text-sm sm:text-base text-black max-w-lg drop-shadow-md'>
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </p>
                <button className='mb-8 sm:mb-10 lg:mb-5 rounded-full bg-black text-white w-full sm:w-fit px-8 sm:px-12 py-3 sm:py-2 text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors shadow-lg'>
                    <NavLink to={`/productdetails`}>Shop Now</NavLink>
                </button>
                
                {/* Stats Section */}
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-24 mt-8 sm:mt-10'>
                    <div className='text-center sm:text-left'>
                        <div className='text-2xl sm:text-3xl lg:text-4xl font-satoshi font-bold mb-1 text-black  drop-shadow-lg'>200+</div>
                        <div className='text-sm sm:text-base text-black  drop-shadow-md'>International Brands</div>
                    </div>
                    <div className='text-center sm:text-left'>
                        <div className='text-2xl sm:text-3xl lg:text-4xl font-satoshi font-bold mb-1 text-black  drop-shadow-lg'>2,000+</div>
                        <div className='text-sm sm:text-base text-black  drop-shadow-md'>High-Quality Products</div>
                    </div>
                    <div className='text-center sm:text-left'>
                        <div className='text-2xl sm:text-3xl lg:text-4xl font-satoshi font-bold mb-1 text-black drop-shadow-lg'>30,000+</div>
                        <div className='text-sm sm:text-base text-black  drop-shadow-md'>Happy Customers</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}