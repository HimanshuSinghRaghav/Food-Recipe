import useGlobalContext from './Context'
import { useState } from 'react'
import Eye from './My_Components/eye'
import { Favroites } from './My_Components/Favroites'

import './App.css'
import { Meals } from './My_Components/Meals'
import Modal from './My_Components/Modal'
import AboutMe from './My_Components/AboutMe'

function App() {
  const [count, setCount ] = useState(0)
  const {showModal , favorites } = useGlobalContext()
  return (
    <>
    <Eye />
    {favorites.length > 0 && <Favroites />}
    <Meals />
    {showModal===true && <Modal/>}
    <AboutMe/>
    </>
  )
}

export default App
