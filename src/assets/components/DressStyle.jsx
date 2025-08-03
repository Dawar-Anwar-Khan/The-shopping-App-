import React from 'react'

export default function DressStyle() {
  return (
    <section className='max-w-screen-2xl mx-auto px-32 py-20 '>
        <div className='bg-[#f2f0f1] rounded-xl p-10'>
            <div className='flex flex-col justify-center gap-9'>
                <h1 className='text-5xl font-CF text-center'>BROWSE BY DRESS STYLE</h1>
                <div className='flex flex-col'>
                    <div className='flex'>
                    <div className='h-40 border w-[40%] m-2 rounded-xl bg-white'></div>
                    <div className='h-40 border w-[60%] m-2 rounded-xl bg-white'></div>
                    </div>
                    <div className='flex'>
                    <div className='h-40 border w-[60%] m-2 rounded-xl bg-white'></div>
                    <div className='h-40 border w-[40%] m-2 rounded-xl bg-white'></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
