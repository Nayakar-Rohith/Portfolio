import React from 'react'
import comingsoon from '../Pictures/comingsoon.jpeg'
function MainPage() {
    const links = [
        { name: 'About', href: '#' },
        { name: 'Experience', href: '#' },
        { name: 'Skills', href: '#' },
        { name: 'Education', href: '#' },
        { name: 'Contact', href: '#' },
      ]
  return (

    <div className='bg-black'>
      <div className='max-w-7xl mx-auto px-5 my-12'>
        <div className='flex md:flex-row flex-col justify-between items-center text-white gap-4 py-10'>
          <div className='md:w-1/2'>
          <h5 className='text-xl font-bold tracking-tight text-white sm:text-xl'>Hello, I'm </h5>
    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Rohith Nayakar</h2>
    <h3 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-2xl">Full stack developer</h3>
    <p className="mt-6 text-lg leading-8 text-gray-300">
    Full-stack developer with 2+ years of experience designing, developing, and implementing solutions with cutting-edge technologies.
    </p>
    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
      {links.map((link) => (
        <a key={link.name} href={link.href}>
          {link.name} <span aria-hidden="true">&rarr;</span>
        </a>
      ))}
    </div>
  </div>

  <div className="mt-12  block  md:flex md:space-x-3">
  <button className='py-2 px-10 mb-8 w-60 rounded-md bg-primary text-white font-bold'>LinkedIn</button>
  <button className='py-2 px-10  mb-8  w-60 rounded-md bg-primary text-white font-bold'>Download Resume</button>
</div>
          </div>
          <div className="md:w-1/2 order-first md:order-none">
          <img src={comingsoon} alt="" className="md:ml-20 w-full" />
        </div>
        </div>
      </div>

    </div>
    
  )
}

export default MainPage