import React from 'react'
import { useClobalContext } from "../../../context/context"
import changeCurrency from '../../Util'
function ResultCard() {
    const { cardItem } = useClobalContext()
    return (
        <div className="col-xxl-8 col-xl-8 col-lg-8 col-ms-12 col-sm-12">
            <div className="final-factor-table">
                <div className="title-factor">
                    <div className="product-name">محصول</div>
                    <div className="product-price">قیمت اصلی</div>

                    <div className="product-discount">قیمت با تخفیف</div>

                </div>
                {
                    cardItem.map((item) =>
                        <div className="product-factor" key={item.id}>
                            <div className="product-name">
                                <img src={item.image} alt="" />
                                <div className="name">{item.name} </div>
                            </div>
                            <div className="price">
                                <p>{changeCurrency(item.discount)}</p><span>تومان</span>
                            </div>

                            <div className="total-price">
                                <p>{changeCurrency(item.price)}</p><span>تومان</span>
                            </div>
                        </div>

                    )
                }

            </div>
        </div>
    )
}

export default ResultCard