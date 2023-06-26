import React,{useState} from 'react'
import "../sass.scss"
function AboutContent() {

    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)

    const updateCounter = () => {
        const counterElemet = document.querySelector("#count1");
        const counterElemet2 = document.querySelector("#count2")
            const number1 = counterElemet.getAttribute("data-counter")
            const number2 = counterElemet2.getAttribute("data-counter")
            const increment1 = number1 / 700;
            const increment2 = number2 / 700;
   
            if (counter < number1) {
                setCounter(Math.ceil(counter + increment1))
              


            } else {
                clearTimeout(timer)
            }

            if(counter2 < number2){
                setCounter2(Math.ceil(counter2 + increment2))

            }else{
                clearTimeout(timer)
            }



        
    }
    let timer = setTimeout(updateCounter, 1)
  return (
  
            <div className="container">
                <div className='row align-items-center justify-content-center flex'>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12'>
                        <div className='home-page-img'>
                            <div className='img-box'>
                                <img src="images/product/product-3.png" alt="" />
                            </div>
                            
                        </div>
                    </div>
                    <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12'>
                        <div className='home-page-text'>
                            <div className='title'>درباره تاریخچه آکادمی <span>مخ ثروت ساز</span></div>
                            <div className='home-page-desc'>
                                <ul>
                                    <li>لورم ایپسوم متن ساختگی با تولید سادگی نا مفهوم </li>
                                    <li>لورم ایپسوم متن ساختگی با تولید سادگی نا مفهوم </li>
                                </ul>
                                <div className='search'>
                                    <input type="stext" name="search" placeholder='جستجو کنید ...' />
                                    <div className='btn-search'><img src="images/shape/search.png" alt="" /></div>
                                </div>
                                <div className='counter'>
                                    <div className='item'> 
                                        <div className='count'id='count1' data-counter="3500">{counter}</div>
                                        <div className='desc'>لورم ایپسوم متن ساختگی
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className='count'id='count2' data-counter="5500">{counter2}</div>
                                        <div className='desc'>لورم ایپسوم متن ساختگی
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
  )
}

export default AboutContent