import React from 'react'
import Footer from '../footer/Footer'
import Nav from "../Nav"
import ResultCard from './fainal-factor-component/ResultCard'
import ResultFactor from './fainal-factor-component/ResultFactor'
import "./sass.scss"
function FinalFactor() {
    return (
        <>
            <Nav />
            <section className="final-factor">
                <div className="container">
                    <div className="title">سبد خرید نهایی</div>
                    <div className="row">
                        <ResultCard />
                        <ResultFactor/>
                    </div>
                </div>
            </section>
            <Footer />
        </>


    )
}

export default FinalFactor