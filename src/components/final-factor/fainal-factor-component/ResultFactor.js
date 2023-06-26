import React from 'react'
import { useClobalContext } from "../../../context/context"
import changeCurrency from '../../Util';
function ResultFactor() {
const { cardItem } = useClobalContext()

    let resultPrice = 0;   
    cardItem.map((item) =>
        resultPrice = resultPrice + item.price
    )

    const totalPrice = resultPrice;
    return (
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-ms-12 col-sm-12" >
            <div className="payment">
                <div className="title">مبلغ قابل پرداخت</div>
                <div className="payment-final-price">
                    <div className="total">مجموع</div>
                    <div className="price">
                        <p>{changeCurrency(totalPrice)}</p><span>تومان</span>
                    </div>
                </div>
                <div className="ruls">
                    <input type="checkbox" />
                    <span>شرایط و قوانین خرید از آکادمی را مطالعه کرده و می پذیرم</span>
                </div>
                <button className="final-pay"><span>ثبت نهایی و پرداخت</span></button>
            </div>
        </div>

       
  )
}

export default ResultFactor