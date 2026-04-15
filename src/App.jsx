import { useState } from 'react'
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import  Home  from './Pages/Home'
import  Pastes from './Pages/Pastes'
import  Views  from './Pages/Views'
import Navigation from './Components/Navigation'




function App() {
  

  return (
    <>
    
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/pastes' element={<Pastes/>}></Route>
        <Route path='/pastes/:id' element={<Views/>}></Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
