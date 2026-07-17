import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import Products from './pages/products'


function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/materials' element={<Home/>}/>
        <Route path='/sheets' element={<Home/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
