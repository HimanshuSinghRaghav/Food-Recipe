import React ,{useContext , useEffect , useState} from 'react'
import { createContext } from 'react'
import axios from 'axios'
import { useAsyncError } from 'react-router-dom';

const AppContext = React.createContext();


const allMealUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';


 const AppProvider = ({children}) => {

  const [meals , setMeals] = useState([])
  const [loading , setLoading] = useState(false)  
  const [searchTerm , setSearchTerm] = useState('')
  const [showModal , setShowModal] = useState(false)
  const [selectedMeal , setSelectedMeal] = useState(null)
  const [favorites , setFavorites] = useState([]);


    const fetchMeal = async (url)=>{
      setLoading(true)
        try {
            const {data} = await axios.get(url)

            if(data.meals){
              setMeals(data.meals)
            }
            else{
              setMeals([])
            }
        } catch (error) {
            console.log(error)
        }
        setLoading (false)
    }

    const selectMeal = (idMeal , favoriteMeal)=>{
      console.log(idMeal)
      let meal;
      meal = meals.find((meal)=>meal.idMeal===idMeal)
      setSelectedMeal(meal)
      setShowModal(true)
    }
    
    const fetchRandomMeal = async()=>{
      await fetchMeal(randomMealUrl)
      
    }

    const closeModal = ()=>{
      setShowModal(false)
    }

    const addToFavorites = (idMeal)=>{
      const meal = meals.find((meal)=>meal.idMeal===idMeal);
      const alreadyFavorite = favorites.find((meal)=>meal.idMeal===idMeal);     
      if(alreadyFavorite) return
      const updatedFavorites = [...favorites , meal]
      setFavorites(updatedFavorites)
    }
    
    const removeFromFavorite = (idMeal)=>{
      const updatedFavorites = favorites.filter((meal)=>meal.idMeal !== idMeal);
      setFavorites(updatedFavorites)
    }

    useEffect(()=>{
      fetchMeal(allMealUrl) 
  } , [])

    // useEffect(()=>{
    //   if(!searchTerm){
    //    fetchMeal(`${allMealUrl}`)  
    //     console.log("null")
    //   }else{
    //     console.log("notNumm")
    //     fetchMeal(`${allMealUrl}${searchTerm}`)  
    //   }
    // } , [searchTerm])

    const handleSearchFood = async(searchTerm)=>{
      await fetchMeal(`${allMealUrl}${searchTerm}`)  
    }

  return ( <AppContext.Provider value={{meals , loading , setSearchTerm , fetchRandomMeal , showModal , selectMeal , selectedMeal , closeModal , addToFavorites ,removeFromFavorite ,favorites ,handleSearchFood}}>
    {children}
  </AppContext.Provider>
    
  )
}




const uasGlobalContext = () => {
  return useContext(AppContext)
   
}

export default uasGlobalContext


export {AppContext ,AppProvider}