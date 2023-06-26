import React from 'react'
import data from "./data.json"
import { useClobalContext } from "../../../context/context"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import changeCurrency from '../../Util';
import { Link } from 'react-router-dom';
function ResentPackage() {
    const { sentProduct } = useClobalContext()
    AOS.init({
        duration: 1000
    });
    return (
        <section className="package-resent">
            <div className="container">
                <div className="row align-items-center justify-content-space-between flex">
                    <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-5'>
                        <div className="title"><span>پکیج</span> های اخیر و پربازدید آکادمی مخ ثروت ساز</div>
                        <div className="desc">
                            <li>لورم ایپسوم متن ساختگی با تولید ساده نامفهوم</li>
                            <li>لورم ایپسوم متن ساختگی با تولید ساده نامفهوم</li>
                            <span className="see-all">مشاهده همه</span>
                        </div>
                    </div>
                    <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12" >
                        <div className="package-resent-items">
                            {
                                data.products.map((item) =>
                                    <Link key={item.id} to="/single-product" onClick={() => sentProduct(item)}>
                                        <div className="package-item" key={item.id}>
                                            <div className="bio">
                                                <div className="intro">
                                                    <div className="name">{item.name}</div>
                                                    <div className="grouping">{item.title}</div>
                                                </div>
                                                <div className="price-box">
                                                    <div className="price">
                                                        <p>{changeCurrency(item.price)}</p><span>تومان</span>
                                                    </div>

                                                </div>
                                            </div>
                                            <img src={item.image} alt="" />
                                        </div>
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                    <div className="img-box">
                        <img src="./images/product/package2.png" alt="" />
                        <div className="line-box"><img src="./images/shape/Vector 13.png" alt="" /></div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default ResentPackage