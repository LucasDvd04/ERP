import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import Products from './pages/Products/products'
import Product from './pages/Products/product'
import Materials from './pages/Materials/materials'
import Sheets from './pages/Sheets/sheets'
import Material from './pages/Materials/material'
import Sheet from './pages/Sheets/sheet'


function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/new' element={<Product/>}/>
        <Route path='/materials' element={<Materials/>}/>
        <Route path='/materials/new' element={<Material/>}/>
        <Route path='/sheets' element={<Sheets/>}/>
        <Route path='/sheets/new' element={<Sheet/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
