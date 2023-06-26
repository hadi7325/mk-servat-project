import React from 'react'
import Nav from '../Nav'
import Footer from "../footer/Footer"
import SingleProductItem from './single-product-component/SingleProductItem'
import "./sass.scss"
import Level from '../home/home-components/Level'
import Intro from './single-product-component/Intro'
import SimilarItem from './single-product-component/SimilarItem'
import AcardionQuestion from './single-product-component/AcardionQuestion'
function SingleProduct() {
  return (
    <>
    <Nav/>
    <SingleProductItem/>
    <Level/>
    <Intro/>
    <SimilarItem/>
    <AcardionQuestion/>
    <Footer/>
    </>
  )
}

export default SingleProduct