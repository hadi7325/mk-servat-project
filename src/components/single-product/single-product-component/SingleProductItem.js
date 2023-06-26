import React from 'react'
import {useClobalContext} from  "../../../context/context"
import changeCurrency from '../../Util'
function SingleProductItem() {
   const {singleProduct,addToCard} = useClobalContext()
  
    return (
        <section className="single-product-item">
           
            <div className="container">
                <div className="intro-item">
                    <div className="row align-items-center">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <div className="intro-item-img">
                                <img src={singleProduct.image} alt="" />
                            </div>
                        </div>
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <div className="intro-item-desc">
                                <div className="name title">{singleProduct.name}</div>
                                <div className="grouping">{singleProduct.title}</div>
                                <ul className="property">
                                    <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</li>
                                    <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</li>
                                    <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</li>
                                    <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</li>
                                </ul>
                                <div className="price-box">
                                    <div className="price">
                                        <p>{changeCurrency(singleProduct.price)}</p><span>تومان</span>
                                    </div>
                                    <div onClick={() => addToCard(singleProduct)} className="add-to-shop">افزودن به سبد خرید <i className="fas fa-shopping-cart" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default SingleProductItem