import React, { useContext, useState } from 'react'
import data from "../components/product/dataProduct.json"
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const allCategori  = ["همه" ,...new Set(data.products.map((item) => item.categury))]
    
    const [items,setItems] = useState(data.products)
    const [cardItem, setCardItem] = useState([])
    const [singleProduct, setSongleProduct] = useState("")
    const [loading, setLoading] = useState(false)
    const [categori,setCategori] = useState(allCategori)

    const addToCard = (product) => {
       
        let isCart = cardItem.filter(item => item.id === product.id).length > 0;
        if (!isCart) {
            setCardItem([...cardItem, product])
            const btnShopAnimate = [
                { transform: 'rotate(5deg) scale(1.3)' },
                { transform: 'rotate(-5deg) scale(1.3)' },
                { transform: 'rotate(5deg) scale(1.3)' },
                { transform: 'rotate(-5deg) scale(1.3)' },
                { transform: 'rotate(0deg) scale(1)' }
            ];
            const iconShop = document.querySelector("#icon-shop")
            const btnShopTimer = {
                duration: 500,
                iterations: 1,
            }
            iconShop.animate(btnShopAnimate, btnShopTimer)
            const message = document.querySelector(".message")
            message.classList.add("active")
            setTimeout(() => {
                message.classList.remove("active")
            }, 2000)
        } else {
            alert("این محصول در سبد خرید موجود است")
        }
    }

    const sentProduct = (product) => {
        window.scrollTo(0,0)
       
       
        setSongleProduct(product)
        // singleProductItem.scrollHeight = 0
       
        
    }

    const removeItemCard = (product) => {
        const newProduct = cardItem.filter((item) => item.id !== product.id)
        setCardItem(newProduct)
    }
    
    const showLoading = () => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        },2000)
    } 

    const filterProduct = (categori) => {
        
        if(categori === "همه"){
             return setItems(data.products)
        }
       
         const newItem = data.products.filter((item) => item.categury === categori )
         setItems(newItem)
    }
    return <AppContext.Provider value={{ cardItem, addToCard, removeItemCard, sentProduct, singleProduct,showLoading,loading,categori,filterProduct,items }}>{children}</AppContext.Provider>
}




export const useClobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, AppProvider }