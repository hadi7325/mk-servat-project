import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Product from './product/Product'
import App from '../App'
import ShoppingBag from './shopping-bag/ShoppingBag'
import About from './about/About'
import SingleProduct from './single-product/SingleProduct'
import ContactUs from './contact-us/ContactUs'
import FinalFactor from './final-factor/FinalFactor'
import SignIn from './sign-in/SignIn'
import Grouping from './grouping/Grouping'
import Sminar from './sminar/Sminar'
import Nav from './Nav'


function Router() {
 
    return (
        <BrowserRouter>
            <Routes>
              
                <Route path='/' element={<App />} />
                <Route path='/products' element={<Product />} />
                <Route path='/shopping-bag' element={<ShoppingBag/>} />
                <Route path='/about' element={<About/>}/>
                <Route path='/contact-us' element={<ContactUs/>}/>
                <Route path='/single-product' element={<SingleProduct/>}/>
                <Route path='/fianl-factor' element={<FinalFactor/>}/>
                <Route path='/grouping' element={<Grouping/>}/>
                <Route path='/sign-in' element={<SignIn/>}/>
                <Route path='/sminar' element={<Sminar/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default Router