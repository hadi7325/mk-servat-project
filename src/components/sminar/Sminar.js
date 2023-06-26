import React, { useState } from 'react'
import Footer from '../footer/Footer';
import Nav from '../Nav';
import data from "../product/dataProduct.json"
import "./sass.scss"
function Sminar() {
    const [items, setItems] = useState(data.products);
    console.log(data)
    return (
        <>
        <Nav/>
        <section className='sminar'>
            <div className='container'>
                <div className='title'>
                    <span>سمینار های</span> آکادمی مخ ثروت ساز
                </div>
                <div className='row'>
                {
                    items.slice(0,3).map((item => (
                        <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12' key={item.key}>
                            <div className='sminar-item'>
                                <div className='img'>
                                    <img src={item.image} alt="" />
                                    <div className='title'>
                                       {item.name}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )))
                }
                    
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Sminar