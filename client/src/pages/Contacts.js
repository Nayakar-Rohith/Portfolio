import React, { useState } from 'react'

function Contacts() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [comment,setComment]=useState('')
  const [feedback,setFeedback]=useState({})
  const handleSubmit=()=>{
    
    console.log({'Name':name,'Email':email,'comment':comment})
    setFeedback({name,email,comment})
    console.log(feedback)
    alert(feedback,"rrr")
  }
  return (
    <section id='contact' className="text-textc  m-8 text-center" onSubmit={handleSubmit}>
      <h3 className="text-textc text-3xl font-bold mb-8 ">Contact Me</h3>
      <form className=' border rounded-3xl bg-contact text-white border-primary m-10 md:p-20 md:px-32 inline-block'>
        <span className='md:flex md:m-4 md:p-4 m-2 p-2 grid'>
          <label className='mr-2 p-2'>Full Name: </label>
        <input className='p-2 text-black' type='text' value={name} placeholder='Enter your full name' onChange={(e)=>setName(e.target.value)}/>
        </span>
        <span className='md:flex justify-end md:m-4 md:p-4 m-2 p-2 grid'>
          <label className='mr-2 p-2'>Email: </label>
        <input className="p-2  text-black" type='email'placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </span>
        <span className='md:flex md:m-4 md:p-4 m-2 p-2 grid'>
          <label className='mr-2 p-2'>Comment: </label>
        <textarea className='p-2  text-black'  placeholder='comment' value={comment} onChange={(e)=>setComment(e.target.value)}/>
        </span>
        <button type="submit" className='bg-app-bg-head rounded-lg hover:bg-card hover:rounded-xl hover:duration-700 text-white rounded-r-sm py-2 px-10 mb-8 w-60 m-3'>Submit</button>
      </form>
      
    </section>
  )
}

export default Contacts