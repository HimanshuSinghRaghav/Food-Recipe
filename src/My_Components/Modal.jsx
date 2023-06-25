import React from 'react'
import useGlobalContext from '../Context'



const Modal = () => {

  const {closeModal , selectedMeal} = useGlobalContext()
  const {strMeal: title, strMealThumb: image , strInstructions: text , strSource: source } = selectedMeal

  return (
    <aside className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50  place-items-center grid z-100'>
        <div className='bg-white w-[500px] h-[500px] rounded-md overflow-scroll'>
           
            <img className='h-64 w-full' src={image} />
            <h1 className='text-black text-3xl font-serif'>{title}</h1>
            <p className='py-4 text-center font-bold'>Cookong Instructoins</p>
            <p className='mx-4 text-justify'>{text}</p>
            <a  href={source} target='_black'>Orignal Source</a><br />
            <button className='ml-52 mb-4 bg-red-500 mt-4 text-center h-7 w-12 rounded-md text-white' onClick={closeModal}>close</button>
        </div>
        
    </aside>
  )
}

export default Modal
