import React from 'react'
import Card from './shopping-bag-components/Card'
import Factor from './shopping-bag-components/Factor'
import Nav from "../Nav"
import Footer from "../footer/Footer"
import "./sass.scss"

function ShoppingBag() {
   
    return (
        <>
        <Nav/>
        <section className="shopping">
            <div className="container">

                <div className="title">سبد خرید  <span>آکادمی مخ ثروت ساز</span></div>
                <div className="row">
                    <Card />
                    <Factor/>
                </div>
            </div>
        </section>
        <Footer/>
        </>

    )
}

export default ShoppingBag