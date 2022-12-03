import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Login from './components/Login'


function App() {
  return (
    
    <div>
     
      <Navbar/>
      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      
      </Routes>
      
      </div>
  )
}

export default App