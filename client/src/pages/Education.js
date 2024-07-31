import React from 'react'
import AUM from '../Pictures/AUM.jpg'
import BML from '../Pictures/bmu.jpg'
function Education() {
  return (
    <section className="max-w-7xl mx-auto px-5 my-6 text-textc " id='education'>
      <h3 className="text-textc text-3xl font-bold mb-12 text-center">Education</h3>
      <div className='md:flex my-3 mx-3'>
      <div className='md:flex bg-edu rounded-3xl text-white my-3 mx-3 border border-primary  md:w-1/2'>
        <div className='md:w-1/3 my-3 mx-4 grid items-center justify-center'>
          <img className='w-32 h-32 rounded-full' src={AUM} alt='AUM'/>
        </div>
        <div className='md:w-2/3 my-3 mx-4 grid gap-3'>
          <h3>Auburn University at Montgomery</h3>
          <h5>Field: Master's in Computer Science</h5>
          <h7>May 2023 - Dec 2024</h7>
          <h7>GPA: 4/4</h7>
        </div>
      </div>
      <div className='md:flex bg-edu rounded-3xl text-white my-3 mx-3 border border-primary md:w-1/2'>
        <div className='md:w-1/3 my-3 mx-4 grid items-center justify-center'>
          <img className='w-32 h-32 rounded-full' src={BML} alt='BML'/>
        </div>
        <div className='md:w-2/3 my-3 mx-4 grid gap-3'>
          <h3>BML Munjal University</h3>
          <h5>Field: BTech in Computer Science and Engineering</h5>
          <h7>Aug 2016 - Aug 2020</h7>
          <h7>GPA: 2.85/4</h7>
        </div>
      </div>
      </div>
      
    </section>
  )
}

export default Education