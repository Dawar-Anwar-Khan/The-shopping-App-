import React from 'react'
import picture from "../images/Rectangle.svg"

export default function Hero() {
  return (
    <section className='max-w-screen-2xl mx-auto px-32 py-20 bg-[#f2f0f1]'>
        <div className='flex justify-between gap-16'>
            <div>
                <h1 className='text-7xl mb-5 font-CF'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className='mb-5'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <p className='mb-5 rounded-full border bg-black text-white w-fit px-12 py-2'>Shop now</p>
                <ul className='flex mt-10 gap-24'>
                    <ul>
                        <li className=' text-4xl font-satoshi font-bold'>200+</li>
                        <li>International Brands</li>
                    </ul>
                    <ul>
                        <li className=' text-4xl font-satoshi font-bold'>2,000+</li>
                        <li>High-Quality Products</li>
                    </ul>
                    <ul>
                        <li className=' text-4xl font-satoshi font-bold'>30,000+</li>
                        <li>Happy Customers</li>
                    </ul>
                </ul>
            </div>
            <div>
                <img className='' src={picture} alt="" />
            </div>
        </div>
    </section>
  )
}
