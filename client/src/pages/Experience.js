import React from 'react'
import TCS from '../Pictures/TCS.webp'
import x0pa from '../Pictures/x0pa.png'
import cedar from '../Pictures/cedar.png'
function Experience() {
  return (
    <section className="max-w-7xl mx-auto px-5 my-6 text-white">
      <div className="text-center">
        <h3 className="text-primary text-3xl font-bold mb-16">Work Experience</h3>
      </div>
      <div
        className="my-16 flex flex-col md:flex-row justify-around gap-12"
      >
        <div
          className="w-[354px] px-5 py-8 rounded-lg border border-primary shadow-[#5dadec3b] cursor-pointer shadow-xl"
        >
          <img
            src={TCS}
            alt="TCS"
            className="w-[196px] mb-12 mx-auto"
          />
          <h5 className="text-center my-5 text-xl">Full Stack Developer</h5>
          <p className="text-justify">
          Developed robust features for front-end and back-end, contributing to Tata Consultancy 
          Services' IT service and consulting initiatives. Authored knowledge articles and conducted end-to-end developer testing.
          </p>
        </div>
        <div
          className="w-[354px] px-5 py-8 rounded-lg border border-primary shadow-[#5dadec3b] cursor-pointer shadow-xl"
        >
          <img
            src={x0pa}
            alt="x0pa"
            className="w-[196px] mb-12 mx-auto"
          />
          <h5 className="text-center my-5 text-xl">Front End Developer Intern</h5>
          <p className="text-justify">
          Contributed to X0PA AI's B2B platform by handling front-end development for the X0PA Recruiter platform. Responsibilities included creating intricate user interfaces, bug fixing, and conducting end-to-end developer testing.
          </p>
        </div>
        <div
          className="w-[354px] px-5 py-8 rounded-lg border border-primary shadow-[#5dadec3b] cursor-pointer shadow-xl"
        >
          <img
            src={cedar}
            alt="cedar"
            className="w-[196px] mb-12 mx-auto"
          />
          <h5 className="text-center my-5 text-xl">Mobile Application Developer Intern</h5>
          <p className="text-justify">
          Cedar IT is a startup focused on product development. Within the company, I have been involved in the creation of various 
          applications, including Fitr and Digital Church applications. My daily responsibilities revolve around designing 
          resilient and user-friendly interfaces, as well as developing APIs using React.js, Node.js, and the Django Framework.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experience