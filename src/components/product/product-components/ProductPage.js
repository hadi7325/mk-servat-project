import Filter from './Filter'
import ProductItem from './ProductItem'
import { useState} from 'react'
import { FaShoppingCart,FaChevronRight,FaChevronLeft } from 'react-icons/fa'
import { useClobalContext } from "../../../context/context"
import { Link } from 'react-router-dom'
// import axios from 'axios'
function ProductPage() {

//    const click = () => {
//     axios.post("http://192.168.1.20/keynina/api/restaurant/test","hello")
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.log(err)
//     })
//    }
    const [loadig, setLoading] = useState(false)
    const { cardItem,items } = useClobalContext()
    const [item, setItem] = useState(items)
   
    // const [sort, setSort] = useState({ sorted: "id", reversed: false })

    const BtnFiter = document.querySelectorAll(".tab")
    BtnFiter.forEach(btn => {
        btn.addEventListener("click", function () {
            for (let index = 0; index < BtnFiter.length; index++) {
                BtnFiter[index].classList.remove("active")

            }
            btn.classList.add("active")
        })
    })

    const sortNew = () => {
        setLoading(true)
        const productCopys = [...items]

        productCopys.sort((productA, productB) => {
            return productA.id < productB.id ? 1 : -1
        })
        setItem(productCopys)
        setTimeout(() => {
            setLoading(false)
        }, 1000)

    }
    const sortOld = () => {
        setLoading(true)
        const productCopys = [...items]

        productCopys.sort((productA, productB) => {
            return productA.id > productB.id ? 1 : -1
        })
        setItem(productCopys)
        setTimeout(() => {
            setLoading(false)
        }, 1000)

    }
    const sortExpencive = () => {
        setLoading(true)
        const productCopys = [...items]

        productCopys.sort((productA, productB) => {
            return productA.price < productB.price ? 1 : -1
        })
        setItem(productCopys)
        setTimeout(() => {
            setLoading(false)
        }, 1000)

    }
    const sortInExpencive = () => {
        setLoading(true)
        const productCopys = [...items]

        productCopys.sort((productA, productB) => {
            return productA.price > productB.price ? 1 : -1
        })
        setItem(productCopys)
        setTimeout(() => {
            setLoading(false)
        }, 1000)

    }

    return (
        
        <section className="product">
            {/* <button onClick={click}>click</button> */}
            <Link to='/shopping-bag'>
                <span id="shopping-bag-icon">
                    <i id="icon-shop" ><FaShoppingCart /></i>
                    <p className="count">{cardItem.length}</p>
                    <p className='message'>این محصول یه سبد خرید اضافه شد</p></span>
            </Link>
            <div className="container">
                <div className="sort">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="title">پکیج های <span> اکادمی مخ ثروت ساز</span></div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="tab-sort">
                                <Filter

                                    sortNew={sortNew}
                                    sortOld={sortOld}
                                    sortInExpencive={sortInExpencive}
                                    sortExpencive={sortExpencive}

                                />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-item">
                    <ProductItem
                        items={item}
                        loadnig={loadig}
                    />
                </div>
                <div className="page-number">
                    <div className="numbers">
                        <div className="btn-prev"><i><FaChevronLeft/></i></div>
                        <div className="space">...</div>
                        <div className="number active">1</div>
                        <div className="number">2</div>
                        <div className="number">3</div>
                        <div className="space">...</div>
                        <div className="btn-next"><i><FaChevronRight/></i></div>
                    </div>
                </div>

            </div>
        </section>


    );

}




export default ProductPage