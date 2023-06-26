import React, { useState,useEffect } from 'react'
import { FiPhoneCall } from "react-icons/fi"
import { AiOutlineUser } from "react-icons/ai"
import { Link } from "react-router-dom"
import { FaSearch, FaShoppingCart } from "react-icons/fa"
import { useClobalContext } from "../context/context"
import { FaProductHunt } from "react-icons/fa"
import { IoIosChatbubbles } from "react-icons/io"
import { FcAbout, FcPhone, FcHome, FcRegisteredTrademark } from "react-icons/fc"
import { BiLogInCircle } from "react-icons/bi"
import { HiMenuAlt3 } from "react-icons/hi"
import data from "../components/product/dataProduct.json"
function Nav() {
  const [value, setValue] = useState("")
  const [menu, setMenu] = useState(false)
  const { cardItem,sentProduct } = useClobalContext()
  const current = data.products.filter((item) => item.name.includes(value));
   
    useEffect(() => {
          window.addEventListener("click",function(e){
             const search = document.querySelector(".search")
             const searchBox = this.document.querySelector(".search-box input")
              if(e.target !== search){
                  setValue("");
                  searchBox.value = "";
              }
          })
    }, []);
  return (
    <div className="container position">
      <div onClick={() => setMenu(false)} className={`${menu ? "overlay active" : "overlay"}`}></div>
      <nav>
        <div className="logo">
          <img src="./images/shape/MS.png" alt="" />
        </div>
        <ul className={`${menu ? "links active" : "links"}`}>
          <Link className="link" to="/"><p>خانه</p><i><FcHome /></i></Link>
          <Link className="link" to="/sminar"><p>سمینار و کارگاه</p> <i><IoIosChatbubbles /></i></Link>
          <Link  className="link" to="/products"><p>محصولات</p> <i style={{ color: "orange" }}><FaProductHunt /></i></Link>
          <Link className="link bag" to="/shopping-bag"><p>سبد خرید</p> <i style={{ color: "orangered" }}><FaShoppingCart /><div className={`${cardItem.length > 0 ? "count active" : "count"}`}><span>{cardItem.length}</span></div></i></Link>
          <Link className="link call" to="/contact-us"><p>درخواست مشاوره ما</p> <i style={{ color: "blueviolet" }}><IoIosChatbubbles /></i></Link>
          <Link className="link signin" to="/sign-in"><p>ورود</p> <i><BiLogInCircle /></i></Link>
          <Link className="link register" to="/sign-in"><p>ثبت نام</p> <i><FcRegisteredTrademark /></i></Link>
          <Link className="link" to="/about"><p>درباره من</p> <i><FcAbout /></i></Link>
          <Link className="link" to="/contact-us"><p>تماس با ما</p> <i><FcPhone /></i></Link>
        </ul>
        <div onClick={() => setMenu(true)} className='btnMenu'><i><HiMenuAlt3 /></i></div>

        <div className="quick-link">
          <div className="item call">
            <p>درخواست مشاوره</p>
            <span><FiPhoneCall /></span>
          </div>
          <Link to='/shopping-bag' className="item shopping-bag-link">
            <p>سبد خرید</p>
            <i><span className={`${cardItem.length > 0 ? "count active" : "count"}`}>{cardItem.length}</span><FaShoppingCart /></i>
          </Link>
          <div className="item sign-in">

            <span><AiOutlineUser /></span>
            <Link to="/sign-in" className='sign-in-item'> ورود </Link>
            |
            <span className='sign-in-item'>ثبت نام</span>
          </div>
        </div>
        <div className='search'>
          <div className='search-box'>
            <input type="text" onChange={(e) => setValue(e.target.value)} placeholder='جستجو کنید ...' />
            <i><FaSearch /></i>
          </div>
          {/* <div className='none-result'>
            <p>چیزی یافت نشد ...</p>
          </div> */}

          {
            value &&
            <div className='text-result'>
              <div className='product-result'>
                <div className='title'>محصول</div>
                <>
                  {
                    current.length > 0 ?

                      data.products.filter((item) => item.name.includes(value)).map((item) =>
                      <>
                        <Link  to="/single-product"><li onClick={() => sentProduct(item)}  className='item'>{item.name}</li></Link>
                       
                        </>
                      )
                      :
                      < p style={{ textAlign: "center", color: "white", margin: "10px 0" }}> چیزی یافت نشد</p>

                  }
                </>
              </div>

              {/* <div className='grouping-result'>
                <div className='title'>دسته بندی ها</div>
                <li className='grouping'>شماره یک</li>
              </div> */}
            </div>
          }
        </div>

      </nav >

    </div >
  )
}

export default Nav