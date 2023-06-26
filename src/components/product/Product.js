
import React from 'react'
import Footer from '../footer/Footer'
import Nav from '../Nav'
import ProductPage from './product-components/ProductPage'
import { useClobalContext } from '../../context/context'
import "./sass.scss"
function Product() {
  const {loading} = useClobalContext()
  return (
    <>
    
    {
      loading ? 
      <div className='loading-message'>
      <div className='icon'></div>
      </div>
      :
      <>
      <Nav/>
      <ProductPage/>
       
      <Footer/>
      
      </>
    }
    </>
  )
}

export default Product