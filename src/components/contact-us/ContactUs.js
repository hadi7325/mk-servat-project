import React from 'react'
import Nav from "../../components/Nav"
import Footer from "../footer/Footer"
import Address from './contact-us-component/Address'
import Phone from './contact-us-component/Phone'
import Social from './contact-us-component/Social'
import "./sass.scss"
function ContactUs() {
    return (
        <>
            <Nav />
            <section className="contact-us">
                <div className="container ">
                    <div className="title">تماس با <span>آکادمی مخ  ثروت ساز</span></div>
                    <div className="row all-item">
                        <Address />
                        <Phone />
                        <Social />
                    </div>
                </div>
            </section>
            <Footer />
        </>

    )
}

export default ContactUs