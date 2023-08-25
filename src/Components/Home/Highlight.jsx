'use client';

import { Carousel } from 'flowbite-react';

export default function Highlight() {
  return (
    <Carousel slideInterval={5000} className='w-full h-[400px] mt-4' indicators={false}>
      <img
        alt="..."
        src="/images/slide1.png"
      />
      <img
        alt="..."
        src="/images/slide2.png"
      />
      <img
        alt="..."
        src="/images/slide3.png"
      />
     
    </Carousel>
  )
}


