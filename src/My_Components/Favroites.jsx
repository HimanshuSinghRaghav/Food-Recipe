import React from 'react'
import useGlobalContext from '../Context'

export const Favroites = () => {

    const {favorites , removeFromFavorite} = useGlobalContext()
    
  return <section className='text-yellow-300 mt-4  bg-red-400 text-center'>
    <div className='ml-4'>
        <h1>This is your Favroites Foods</h1>
        <div className='flex space-x-4' >
           {favorites.map((item)=>{
            const{idMeal , strMealThumb:image}=item
            return <div >
                <img className='w-24 h-24 rounded-full border-4 border-white block' src={image} />
                <button onClick={()=>removeFromFavorite(idMeal)}>remove</button>
            </div>
           })}
        </div>
    </div>
  </section>
    
  
}
