import React from 'react'
import comingsoon from '../Pictures/comingsoon.jpeg'
function About() {
  return (
    <div className='bg-black'>
    <div className='max-w-7xl mx-auto px-5 my-12'>
      <div className='flex md:flex-row flex-col justify-between items-center text-white gap-4 py-10'>
      <div className="md:w-1/2 order-first md:order-none">
        <img src={comingsoon} alt="" className=" w-full" />
      </div>
        <div className='md:w-1/2'>
  <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About me</h2>
  <p className="mt-6 text-lg leading-8 text-gray-300">
  Versatile Full Stack Developer with a strong enthusiasm for Machine Learning. 
        I am a committed professional in search of a dynamic role as a Full Stack Developer,
         aiming to utilize my proficiency in both front-end and back-end technologies. I am 
         excited about applying my knowledge of machine learning to devise inventive solutions 
         and make meaningful contributions to progressive projects.
  </p>
<div className="mt-12  block  md:flex md:space-x-3">
<button className='py-2 px-10 mb-8 w-60 rounded-md bg-primary text-white font-bold'>LinkedIn</button>
<button className='py-2 px-10  mb-8  w-60 rounded-md bg-primary text-white font-bold'>Github</button>
</div>
        </div>
      </div>
    </div>

  </div>

    
  )
}

export default About