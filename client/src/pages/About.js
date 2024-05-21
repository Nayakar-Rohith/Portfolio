import React from 'react'
import rohithn from '../Pictures/rohithn.png'
import './index.css'
function About() {
  return (
    <div className='bg-black'>
    <div className='max-w-7xl mx-auto px-5 my-12'>
      <div className='flex md:flex-row flex-col justify-between items-center text-white gap-4 py-10'>
      <div className="md:w-1/2 order-first md:order-none homeIMG relative">
            <div className='imgBox text-center'>
            <img src={rohithn} alt="rohith" className='md:ml-20 w-full max-w-44 md:max-w-96'/>
            </div>
            <div className='liquidImg'>
            <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
  <path  fill="#12f7ff">
    <animate attributeName='d'
    dur='20000ms'
    repeatCount='indefinite'
      values='
      M439,319.5Q389,389,319.5,426.5Q250,464,193.5,413.5Q137,363,86.5,306.5Q36,250,68,175Q100,100,175,89Q250,78,330.5,83.5Q411,89,450,169.5Q489,250,439,319.5Z;
      M431,320.5Q391,391,320.5,417.5Q250,444,181,416Q112,388,100.5,319Q89,250,112,192.5Q135,135,192.5,102Q250,69,333.5,76Q417,83,444,166.5Q471,250,431,320.5Z;
      M418.5,326.5Q403,403,326.5,415.5Q250,428,185.5,403.5Q121,379,85,314.5Q49,250,82.5,183Q116,116,183,89Q250,62,322.5,83.5Q395,105,414.5,177.5Q434,250,418.5,326.5Z;
      M401.5,323Q396,396,323,436.5Q250,477,166.5,447Q83,417,73.5,333.5Q64,250,99,192Q134,134,192,73.5Q250,13,317,64.5Q384,116,395.5,183Q407,250,401.5,323Z;
      M403,320.5Q391,391,320.5,426Q250,461,162.5,443Q75,425,83,337.5Q91,250,110.5,190Q130,130,190,89.5Q250,49,338,61.5Q426,74,420.5,162Q415,250,403,320.5Z;
      M405.5,312.5Q375,375,312.5,414Q250,453,179.5,422Q109,391,91.5,320.5Q74,250,95,183Q116,116,183,62.5Q250,9,315.5,64Q381,119,408.5,184.5Q436,250,405.5,312.5Z;
      M439,319.5Q389,389,319.5,426.5Q250,464,193.5,413.5Q137,363,86.5,306.5Q36,250,68,175Q100,100,175,89Q250,78,330.5,83.5Q411,89,450,169.5Q489,250,439,319.5Z;'
    >
    </animate>
  </path>
</svg>
            </div>
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