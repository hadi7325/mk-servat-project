import React from 'react'
import Nav from "../Nav"
import Footer from "../footer/Footer"
import "./sass.scss"
import { Link } from "react-router-dom"
import { useClobalContext } from '../../context/context'
function Grouping() {
    const {categori,filterProduct} = useClobalContext()
    return (

        <>
            <Nav />
            <section className='grouping-section'>
                <div className='container'>

                    <div className='title'>دسته بندی محصولات <span>آکادمی مخ ثروت ساز</span></div>
                    <div className='row'>
                       {
                        categori.map((item,index) => 
                        <div key={index} className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                            <Link to="/products">
                            <div className='grouping-item'>
                                <p onClick={() => filterProduct(item)}>{item}</p>
                            </div>
                        </Link>
                        </div>
                        )
                       }
                       
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Grouping