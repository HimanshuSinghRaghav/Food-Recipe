import React from 'react'
import { BsHandThumbsUp } from 'react-icons/bs'
import useGlobalContext from '../Context'
import { Favroites } from './Favroites'
import Modal from './Modal'
 
export const Meals = () => {
  const { meals ,loading , selectMeal , addToFavorites} = useGlobalContext()

  if(loading){
    return <section>
      <h4 className=' text-white'>Loading....</h4>
    </section>
  }

  if(meals.length < 1){
    return <section className='ml-80 mt-56'>
      <a className='text-white text-3xl '>No Meals matched your search term , Try Again</a>
    </section>
  }


  const { showModal, favorites } = useGlobalContext();

  return (
    <>
    {favorites.length > 0 && <Favroites/>}  
    {showModal === true && <Modal/>}
    <section className='ml-48 '>
      <div className='grid grid-cols-3 gap-x-8 gap-y-8   pt-10 w-[1000px]  '>
        {meals.map((singleMeal) => {
          const { idMeal, strMeal: title, strMealThumb: image } = singleMeal;

          
          return <article key={idMeal} className='  shadow-lg hover:shadow-purple-500/50  bg-yellow-100 transition-all ease-in duration-300'>

            <img src={image} className='w-72 h-52 m-3' onClick={()=>selectMeal(idMeal)}/>

            <footer className='flex justify-between '>
              <h5 className='ml-6 font-serif text-2xl text-purple-600'>{title}</h5>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-4 stroke-purple-400 hover:fill-purple-600" onClick={()=>{addToFavorites(idMeal)}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
              </svg>

            </footer>
          </article>

        })}
      </div>

      {/* <h4>hi it is done !</h4> */}
    </section>
    </>
  )
}
