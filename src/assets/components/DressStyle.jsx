import React from 'react'

export default function DressStyle() {
  return (
    <section className='max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32 py-10 md:py-20'>
        <div className='bg-[#f2f0f1] rounded-xl p-4 sm:p-6 md:p-10'>
            <div className='flex flex-col justify-center gap-6 md:gap-9'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-CF text-center'>
                    BROWSE BY DRESS STYLE
                </h1>
                
                {/* Desktop/Tablet Layout - 2x2 Grid */}
                <div className='hidden sm:flex flex-col'>
                    <div className='flex'>
                        <div className='h-32 md:h-40 border w-[40%] m-1 md:m-2 rounded-xl bg-white'></div>
                        <div className='h-32 md:h-40 border w-[60%] m-1 md:m-2 rounded-xl bg-white'></div>
                    </div>
                    <div className='flex'>
                        <div className='h-32 md:h-40 border w-[60%] m-1 md:m-2 rounded-xl bg-white'></div>
                        <div className='h-32 md:h-40 border w-[40%] m-1 md:m-2 rounded-xl bg-white'></div>
                    </div>
                </div>

                {/* Mobile Layout - Single Column */}
                <div className='flex sm:hidden flex-col gap-3'>
                    <div className='h-28 border rounded-xl bg-white'></div>
                    <div className='h-28 border rounded-xl bg-white'></div>
                    <div className='h-28 border rounded-xl bg-white'></div>
                    <div className='h-28 border rounded-xl bg-white'></div>
                </div>
            </div>
        </div>
    </section>
  )
}