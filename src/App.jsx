import { useState } from 'react'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Login from "./Pages/Login/Login"
import Player from './Pages/Player/Player'


function App() {
 

  return (
  <>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/Player/:id' element={<Player />} />
  </Routes>

  </>
  )
}

export default App
