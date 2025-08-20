import { useState } from 'react'
import tshirt from '../../images/t-shirt.svg'
import ArrivalDatas from './newArrivals'
import { NavLink } from 'react-router'

export default function NewArrivals() {
    const [isActive , setIsActive] = useState(false)
  return (
    <section className='max-w-screen-2xl mx-auto px-5 lg:px-32 pt-20 '>
        <div className='flex flex-col justify-center items-center gap-5'>
            <h1 className='font-CF text-3xl lg:text-5xl'>NEW ARRIVALS</h1>
            
            {/* Mobile horizontal scroll */}
            <div className={`lg:hidden flex gap-4 overflow-x-auto w-full pb-4 ${isActive ? 'flex-wrap overflow-visible' : ''}`} 
                 style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style jsx>{`
                    div::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
                {
                    ArrivalDatas.map((data , i) => {
                        return <div key={i} className='h-80 w-72 flex-shrink-0 ml-10'>
                    <div className='bg-[#f2f0f1] h-60 w-60 rounded-2xl overflow-hidden'>
                        <NavLink to={`/productdetails`}><img className='object-contain' src={tshirt} alt=""/></NavLink>
                    </div>
                    <p className='mb-3 mt-2  font-bold font-satoshi'>
                        {data.type}
                    </p>
                    <p className='font-bold font-satoshi'>
                        ${data.amount}
                    </p>
                </div>
                    })
                }
            </div>

            {/* Desktop view with existing functionality */}
            <div className={`hidden lg:flex justify-center items-center flex-wrap  overflow-hidden h-80 ${isActive ? 'overflow-visible h-full' : ''}`}>
                {
                    ArrivalDatas.map((data , i) => {
                        return <div key={i} className='h-80 w-72 '>
                    <div className='bg-[#f2f0f1] h-60 w-60 rounded-2xl overflow-hidden'>
                        <NavLink to={`/productdetails`}><img className='object-contain' src={tshirt} alt=""/></NavLink>
                    </div>
                    <p className='mb-3 mt-2  font-bold font-satoshi'>
                        {data.type}
                    </p>
                    <p className='font-bold font-satoshi'>
                        ${data.amount}
                    </p>
                </div>
                    })
                }
            </div>
            
            {/* View All/Less buttons - only show on desktop */}
            <p className={`hidden lg:block text-center rounded-full border border-gray-600 px-10 py-2 hover:cursor-pointer ${isActive ? 'opacity-0' : ''}`}
                onClick={() => setIsActive(true)}
            >
                View All
            </p>
            <p className={`hidden lg:block text-center rounded-full border border-gray-600 px-10 py-2 hover:cursor-pointer ${isActive ? '' : 'opacity-0'}`}
                onClick={() => setIsActive(false)}
            >
                View Less
            </p>
        </div>
    </section>
  )
}