import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useClobalContext } from "../../../context/context"
import 'aos/dist/aos.css'; // You can also use <link> for st
import { Link } from 'react-router-dom';
import changeCurrency from '../../Util';

function ProductItem({ items,loadnig }) {
   
    const { addToCard, sentProduct } = useClobalContext()
    return (
        <div className="row">
            

            {
                loadnig ? 
                <div className='loading'></div>
                :
                items.map((product =>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 parent"  key={product.id}>
                        <div className="item" >

                            <Link onClick={() => sentProduct(product)} to="/single-product">
                                <div className="item-img-box">
                                    <img src={product.image} alt="" />
                                </div>
                                <div className="name">{product.name}</div>
                                <div className="grouping">{product.title}</div>
                            </Link>
                            <div className="price-box">

                                <div className="price">
                                    <p>{changeCurrency(product.price)}</p>
                                    <span>تومان</span>
                                </div>
                                <div onClick={() => addToCard(product)} className="add-to-shop"> <span>افزودن به سبد خرید</span> <p><AiOutlineShoppingCart /></p></div>
                            </div>
                            <div className="line"><img src="./images/shape/Vector 13.png" alt="" /></div>
                        </div>

                    </div >


                ))
            }
            
        </div>
    )
}



export default ProductItem