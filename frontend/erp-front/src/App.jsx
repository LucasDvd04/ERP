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
import ProtectedRoute from './components/logedRoute'
import { NotFound } from './components/notFound'
import LogedLayout from './pages/Layout/logedLayout'


function App() {

  const loged = localStorage.getItem("@access")
  return (

      <Routes>
        <Route path='/' element={<Login/>} />

        <Route element={<ProtectedRoute isAuth={loged}/>}>
          <Route element={<LogedLayout/>}>
            <Route path='/home' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/products/new' element={<Product/>}/>
            <Route path='/materials' element={<Materials/>}/>
            <Route path='/materials/new' element={<Material/>}/>
            <Route path='/sheets' element={<Sheets/>}/>
            <Route path='/sheets/new' element={<Sheet/>}/>
          </Route>
        </Route>

        <Route path="*" element={<NotFound/>} />
        
      </Routes>
  )
}

export default App
