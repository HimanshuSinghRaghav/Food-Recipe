import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useGlobalContext from '../Context'
import Cook from './cook.png'
import { Favroites } from './Favroites'

const Eye = () => {
  const {setSearchTerm ,fetchRandomMeal , handleSearchFood , favorites} = useGlobalContext() 
  const [text , setText] = useState('')
  const handleChange = (e)=> {
    setText(e.target.value)
  }


  const handleRandomMeal = () => {
    setSearchTerm('')
    setText('')
    fetchRandomMeal()
  }
  const navigate = useNavigate()
  
  return (
    <>
    <div className=' w-full '> 
     <nav className='bg-gray-800 text-indigo-50 font-serif  h-20 flex px-2'>
      <img className='w-20 h-20' src={Cook} alt="FoodSu" />

     <button onClick={()=>{navigate('/') , handleSearchFood('')}}  className=' ml-20 mt-5 hover:bg-gray-500 rounded-md w-40 h-10 text-center pt-2'>Home</button><br/>
     <button onClick={()=>navigate('/aboutme')} className=' mt-5 hover:bg-gray-500 rounded-md w-60 h-10 text-center pt-2'>About Me</button>
 
     <div className='flex ml-[675px] mt-7 '>
      <div className='bg-white flex rounded-md h-9 w-56 hover:border border-cyan'>
      <input type='text'  onChange={(e)=>{handleChange(e) , handleSearchFood(e.target.value)}} value={text} placeholder='type fevorite meal'  className='bg-white ml-2 mt-1 text-black 
       focus:outline-none focus:border-white ' />

      {/* <svg xmlns="http://www.w3.org/2000/svg" type='submit' onClick={()=> handleSearchFood(text)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5}        stroke="currentColor" className="w-6 h-6 mt-1 bg-white stroke-black hover:stroke-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg> */}
      </div>

      <button className='text-white ml-3 bg-green-500 h-9 w-32 rounded-md hover:bg-green-400' onClick={()=>handleRandomMeal()}>
        Surprise Me
      </button>
     </div>      
     </nav>
     
    
    </div>
    {favorites.length > 0 && <Favroites/>} 
    </>
  )
}

export default Eye
