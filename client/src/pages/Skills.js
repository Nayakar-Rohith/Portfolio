import React from 'react'
import './index.css'
import {react,redux,javascript,typescript} from '../Pictures'

const Skills = () => {
  const skills = [
    { skill: 'React.js', src: react },
    { skill: 'Redux', src: redux },
    { skill: 'JavaScript', src: javascript },
    { skill: 'Typescript', src: typescript },
    // Add more skills as needed
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      {skills.map((item, index) => (
        <div className='border p-4 border-primary justify-center text-white' key={index}><img className='max-w-12' src={item.src} alt={item.skill}/>
        <p>{item.skill}</p>
        </div>
      ))}
      
    </div>
  );
};

export default Skills;
