import React from 'react'
// import Typewriter from 'typewriter-effect';
import Typewriter from '@/components/Typewriter';
import Bubble from '@/components/Bubble';


export default function page() {
  return (
    <>
      <div className='h-min w-auto '>
        <span className=" drop-shadow-xl max-sm:text-2xl max-md:text-4xl max-lg:text-5xl text-secondary text-5xl p-10 font-bold relative flex flex-wrap gap-4">
          Hey I am <span data-text="Developer." className=' text-primary'>
            <Typewriter texts={[' Alapan Das']} speed={150} />
          </span>
        </span>
        <div className='flex justify-between max-sm:flex-col' >
          <p className='drop-shadow-xl max-sm:text-2xl max-md:text-4xl max-lg:text-5xl text-secondary text-5xl p-10 font-bold relative flex flex-wrap gap-4'>
            I am a
            <span className='text-primary'>
              {/* <Typewriter options={{ strings: ['Developer by profession', 'Guitarist by hobby'], autoStart: true, loop: true }} /> */}
              <Typewriter
                texts={[
                  'Developer by profession', 'Guitarist by hobby'
                ]}
                speed={150}  // Typing speed in milliseconds
                pause={1500} // Pause between texts in milliseconds
              />
            </span>
          </p>
          <div className='Image '>
            <div className='fixed -z-10 max-lg:h-28  max-lg:w-28 lg:w-36 lg:h-36 xl:w-36 xl:h-36 right-72 -top-28  '>
              <Bubble />
              {/* <img className='rounded-full mx-10 z-50  max-lg:h-28  max-lg:w-28 lg:w-36 lg:h-36 xl:w-36 xl:h-36' src="https://www.github.com/AlapanDas.png" alt="Logo" /> */}
            </div>
            <div className='fixed -z-10 max-lg:h-28  max-lg:w-28 lg:w-36 lg:h-36 xl:w-36 xl:h-36 top-1/2 -left-32  '>
              <Bubble />

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
