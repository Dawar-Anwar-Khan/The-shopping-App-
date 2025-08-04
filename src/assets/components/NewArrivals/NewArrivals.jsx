import { useState } from 'react'
import tshirt from '../../images/t-shirt.svg'
import ArrivalDatas from './newArrivals'
import { NavLink } from 'react-router'

export default function NewArrivals() {
    const [isActive , setIsActive] = useState(false)
  return (
    <section className='max-w-screen-2xl mx-auto px-32 py-20'>
        <div className='flex flex-col justify-center items-center gap-10'>
            <h1 className='font-CF text-5xl'>NEW ARRIVALS</h1>
            <div className={`flex justify-center items-center flex-wrap overflow-hidden h-96 ${isActive ? 'overflow-visible h-full' : ''}`}>
                {
                    ArrivalDatas.map((data , i) => {
                        return <div key={i} className='h-96 w-72'>
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
            <p className={`text-center rounded-full border border-gray-600 px-10 py-2 hover:cursor-pointer ${isActive ? 'hidden' : ''}`}
                onClick={() => setIsActive(true)}
            >
                View All
            </p>
            <p className={`text-center rounded-full border border-gray-600 px-10 py-2 hover:cursor-pointer ${isActive ? '' : 'hidden'}`}
                onClick={() => setIsActive(false)}
            >
                View Less
            </p>
        </div>
    </section>
  )
}
