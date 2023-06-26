import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useClobalContext } from "../../../context/context"
import changeCurrency from '../../Util'
function Card() {
    const { cardItem,removeItemCard } = useClobalContext()
 

    return (
        <div className=" col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12">
            <div className="all-item">



                <p className={`${cardItem.length === 0 ? "card-message active" : "card-message"}`}>سبد خرید خالی است !</p>
                {
                    cardItem && cardItem.map((item) =>
                        <div className="shopping-item" key={item.id}>
                            <i onClick={() => removeItemCard(item)} className='close '><FaTimes /></i>
                            <img src={process.env.PUBLIC_URL + item.image} alt="" />
                            <div className="name">{item.name}</div>
                            <div className="price-box">
                                <div className="price-main">{changeCurrency(item.discount)}<span>تومان</span></div>
                                <div className="price-item">
                                    <p>{changeCurrency(item.price)}</p><span>تومان</span>
                                </div>
                            </div>
                        </div>
                    )




                }


            </div>
        </div>
    )
}

export default Card