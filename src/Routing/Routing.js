import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../Pages/Home'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import HomeA from '../Admin/Home'
import Product from '../Admin/Product'
import Tags from '../Admin/Tags'
import Food from '../Pages/Food'
import Drink from '../Pages/Drink'
import Category from '../Admin/Category/Category'
import AddCategory from '../Admin/Category/AddCategory'
import Order from '../Pages/Order'

const Routing = () => {
  return (
   <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Navbar' element={<Navbar/>} />
            <Route path='/Footer' element={<Footer/>} />
            <Route path='/Card' element={<Card/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/Register' element={<Register/>} />
            <Route path='/Food' element={<Food />} />
            <Route path='/Drink' element={<Drink />} />
            <Route path='/Order' element={<Order />} />
            <Route path='/HomeA' element={<HomeA/>} />
            <Route path='/Product' element={<Product/>} />
            <Route path='/Category' element={<Category/>} />
            <Route path='/AddCategory' element={<AddCategory/>} />
            <Route path='/Tags' element={<Tags/>} />
        </Routes>
    </BrowserRouter>
   </>
 )

}

export default Routing;