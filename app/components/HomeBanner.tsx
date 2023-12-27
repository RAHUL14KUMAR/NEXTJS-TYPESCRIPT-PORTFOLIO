import React from 'react'
import Image from 'next/image'
function HomeBanner() {
  return (
    <div className='relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8'>
      <div className='mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly'>
        <div>
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Winter Sales</h1>
            <p className='text-lg md:text-xl text-white mb-2'>Enjoy Discounts on selected items</p>
            <p className='text-2xl md:text-5xl text-yellow-400 font-bold'>GET 50%OFF</p>
        </div>
        <div className='w-1/3 relative aspect-video'>
            <Image src='https://i.etsystatic.com/21231725/r/il/029861/2151781559/il_794xN.2151781559_i7ll.jpg' alt='noImageFound' fill className='object-contain'/>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
