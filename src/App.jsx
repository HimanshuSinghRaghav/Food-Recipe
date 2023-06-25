import useGlobalContext from './Context'
import { useState } from 'react'
import Eye from './My_Components/Eye'
import { Favroites } from './My_Components/Favroites'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Meals } from './My_Components/Meals'
import Modal from './My_Components/Modal'
import AboutMe from './My_Components/AboutMe'

function App() {


  return (<>
    <Router>
        <Eye />
      <Routes>             
          <Route exact path="/" element={<Meals />} />
          <Route exact path="/aboutme" element={<AboutMe/>} />
      </Routes>
    </Router>
    </>
  );
}


export default App
