import React from 'react'
import { Link } from 'react-router-dom';
import { useClobalContext } from "../../../context/context"
import changeCurrency from '../../Util';
function Factor() {
    const { cardItem } = useClobalContext()
    let resultPrice = 0;
    let resultPriceDiscount = 0;
     cardItem.map((item) =>
        resultPrice = resultPrice + item.price
    )
     cardItem.map((item) =>
     resultPriceDiscount = resultPriceDiscount + item.discount
    )
    const totalDiscountPrice = resultPriceDiscount - resultPrice

    const totalPrice = resultPrice;
   
    return (
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="shopping-factor">
                <span>جزییات پرداخت</span>
                <div className="total-price">
                    <div className="text">قیمت کل</div>
                    <div className="price">
                        <p>{changeCurrency(totalPrice)}</p><span>تومان</span>
                    </div>
                </div>
                <div className="total-profit">
                    <div className="profit"> سود شما از خرید</div>
                    <div className="price"><p>{changeCurrency(totalDiscountPrice)}</p> <span>تومان</span></div>
                </div>
                <div className="discount-code">
                    <input type="text" placeholder="درج کد تخفیف" />
                    <input className="submit" type="submit" value="ثبت کد" />
                </div>
                <div className="payment">
                    <div className="text">مبلغ قابل پرداخت</div>
                    <div className="result-price">
                        <p>{changeCurrency(totalPrice)}</p> <span>تومان</span>
                    </div>
                </div>
                <Link to='/fianl-factor'><input className="inp-submit" type="submit" value="پرداخت و تکمیل سفارش" /></Link>
            </div>
        </div>

    )
}

export default Factor