import React from 'react'
import { useState } from 'react'
import useGlobalContext from '../Context'


const Eye = () => {
  const {setSearchTerm ,fetchRandomMeal} = useGlobalContext() 
  const [text , setText] = useState('')
  const handleChange = (e)=> {
    setText(e.target.value)
  }

  const handleSubmit = (e)=> {
    
    e.preventDefault()
    if(text){
      setSearchTerm(text)
      
    }
  }

  const handleRandomMeal = () => {
    setSearchTerm('')
    setText('')
    fetchRandomMeal()
  }

  
  return (
    <div className=' w-full '>
     <nav className='bg-gray-800 text-indigo-50 font-serif  h-20 flex'>
      <img className='w-10 h-10' src='boy.png'></img>
     <a className=' ml-20 mt-5 hover:bg-gray-500 rounded-md w-20 h-10 text-center pt-2' href='#'>Home</a>
     <a className=' mt-5 hover:bg-gray-500 rounded-md w-20 h-10 text-center pt-2'>About Me</a>

     <form className='flex ml-[675px] mt-7 ' onSubmit={handleSubmit}>
      <div className='bg-white flex rounded-md h-9 w-56 hover:border border-cyan'>
      <input type='text'  onChange={handleChange} value={text} placeholder='type fevorite meal'  className='bg-white ml-2 mt-1 text-black 
       focus:outline-none focus:border-white ' />

      <svg xmlns="http://www.w3.org/2000/svg" type='submit' onClick={handleSubmit} fill="none" viewBox="0 0 24 24" strokeWidth={1.5}        stroke="currentColor" className="w-6 h-6 mt-1 bg-white stroke-black hover:stroke-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
      </div>

      <button className='text-white ml-3 bg-green-500 h-9 w-32 rounded-md hover:bg-green-400' onClick={handleRandomMeal}>
        Surprise Me
      </button>
     </form>      
     </nav>
     
    
    </div>
  )
}

export default Eye
