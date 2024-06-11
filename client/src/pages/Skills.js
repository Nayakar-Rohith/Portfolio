import React from 'react'
import './index.css'
import {react,redux,javascript,typescript,python,java,c,angular,bootstrap,css,html,django,dl,ml,express,
  git,ionic,mern,mongodb,mssql,node,postgresql,
  tailwind,sql,tsql,
} from '../Pictures'

const Skills = () => {
  const FEskills = [
    { skill: 'React.js', src: react },
    { skill: 'Redux', src: redux },
    { skill: 'JavaScript', src: javascript },
    { skill: 'Typescript', src: typescript },
    { skill: 'tailwind CSS', src: tailwind },
    { skill: 'Bootstrap', src: bootstrap },
    { skill: 'HTML', src: html },
    { skill: 'CSS', src: css },
    { skill: 'Angular (basics)', src: angular },
    { skill: 'Ionic Framework (basics)', src: ionic }
  ];

  const BEskills = [
    { skill: 'Node.js', src: node },
    { skill: 'Python', src: python },
    { skill: 'Express.js', src: express },
    { skill: 'Django Framework', src: django },
    { skill: 'C++', src: c },
    { skill: 'Java (basics)', src: java }
  ];
  const Fullskills = [
    { skill: 'MERN Stack', src: mern }
  ];
  const DBskills = [
    { skill: 'SQL', src: sql },
    { skill: 'MongoDB', src: mongodb },
    { skill: 'T-SQL', src: tsql },
    { skill: 'Microsoft SQL Server', src: mssql },
    { skill: 'PostgreSQL', src: postgresql }
  ];
  const otherskills = [
    { skill: 'Machine Learning', src: ml },
    { skill: 'Deep Learning', src: dl },
    { skill: 'Git', src: git }
  ];

  return (
    <div className="text-textc mt-8" id='skills'>
      <h3 className="text-textc text-3xl font-bold mb-8 text-center">Skills</h3>

      <div className="mt-6 text-center">
        <h1 className='text-xl'>Frontend Development:</h1>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
        {FEskills.map((item, index) => (
        <div className='bg-skill hover:w-32  hover:duration-700 text-white  grid border w-28 p-4 border-primary justify-center text-textc' key={index}><img className='max-w-12 m-auto' src={item.src} alt={item.skill}/>
        <p className='mt-4'>{item.skill}</p>
        </div>
      ))}
        </div>
      </div>
      <div className="mt-6 text-center">
        <h1 className='text-xl'>Backend Development:  </h1>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
        {BEskills.map((item, index) => (
        <div className=' bg-skill text-white hover:w-32  hover:duration-700  grid border w-28 p-4 border-primary justify-center text-textc' key={index}><img className='max-w-12 m-auto' src={item.src} alt={item.skill}/>
        <p className='mt-4'>{item.skill}</p>
        </div>
      ))}
        </div>
      </div>
      <div className="mt-6 text-center">
      <h1 className='text-xl'>Full Stack Development:  </h1>
      <div className=" flex flex-wrap justify-center gap-4 mt-8">        
      {Fullskills.map((item, index) => (
        <div className='bg-skill text-white h-36 hover:w-32  hover:duration-700  grid border w-28 p-4 border-primary justify-center text-textc' key={index}><img className='max-w-12 m-auto' src={item.src} alt={item.skill}/>
        <p className='mt-4'>{item.skill}</p>
        </div>
      ))}</div>

      </div>
      <div className="mt-6 text-center">
      <h1 className='text-xl'>Data Management: </h1>
      <div className="   flex flex-wrap justify-center gap-4 mt-8">

        {DBskills.map((item, index) => (
        <div className='bg-skill text-white hover:w-32  hover:duration-700  grid border w-28 p-4 border-primary justify-center text-textc' key={index}><img className='max-w-12 m-auto' src={item.src} alt={item.skill}/>
        <p className='mt-4'>{item.skill}</p>
        </div>
      ))}
      </div>
      </div>
      <div className="mt-6 text-center"> 
      <h1 className='text-xl'>Miscellaneous: </h1>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {otherskills.map((item, index) => (
        <div className='bg-skill text-white hover:w-32  hover:duration-700 border w-28 p-4 border-primary justify-center text-textc' key={index}><img className='max-w-12 m-auto' src={item.src} alt={item.skill}/>
        <p className='mt-4'>{item.skill}</p>
        </div>
      ))}
      </div>
      </div>
      
    </div>
  );
};

export default Skills;
