import React from 'react'
import dataSlider from "./data.json"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaShoppingCart} from "react-icons/fa"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {useClobalContext} from "../../../context/context"
import changeCurrency from '../../Util';
import { Link } from 'react-router-dom';
function ResentPodcast() {
    const {addToCard,sentProduct} = useClobalContext()
    AOS.init({
        duration:1000
    });

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        swipeToSlide: true,
        centerPadding: 30,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
       
    };

    return (
        <section className='resent-podcast'>
            <div className='container'>
                <div className="row align-items-center ">
                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-5"data-aos="fade-left">
                        <div className="title">
                            <h1><span>پادکست</span> های اخیر و پربازدید آکادمی مخ ثروت ساز</h1>
                        </div>
                        <li className="desc">لورم ایپسوم متن ساختگی با تولید ساده نتمفهوم</li>

                    </div>
                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className='slider'>
                            <Slider {...settings}>
                                {
                                    dataSlider.products.map((slide) =>
                                        <div className="resent-podcasts-item" key={slide.id} >
                                            <Link onClick={() => sentProduct(slide)} to="/single-product">
                                            <img src={slide.image} alt="" />
                                            <div className="name">{slide.name}</div>
                                            <div className="grouping">{slide.title}</div>

                                            </Link>
                                            <div className="price-box">
                                                <div className="price">
                                                    <p>{changeCurrency(slide.price)}</p><span>تومان</span>
                                                </div>
                                                <span onClick={() => addToCard(slide)} className='add-to'><p>افزودن سبد خرید</p><i><FaShoppingCart/></i></span>
                                            </div>
                                        </div>

                                    )
                                }
                            </Slider>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}



export default ResentPodcast