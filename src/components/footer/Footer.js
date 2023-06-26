import React, { useState } from 'react'

function Footer() {
    const [errorName, setErrorName] = useState("")
    const [errorTitle, setErrorTitle] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorNumber, setErrorNumber] = useState("")
    
    const [validName,setValidName] = useState(false)
    const [validTitle,setValidTitle] = useState(false)
    const [validEmail,setValidEmail] = useState(false)
    const [validNumber,setValidNumber] = useState(false)

    const showErrors = (e) => {
   
        if (!errorName ){
            e.preventDefault()
            setValidName(true)
        }else{
            
            setValidName(false)
        }

        if(!errorTitle){
            e.preventDefault()
            setValidTitle(true)
        }else{
            setValidTitle(false)
        }

        if(!errorEmail){
            e.preventDefault()
            setValidEmail(true)
        }else{
            setValidEmail(false)
        } 

        if(!errorNumber) {
            e.preventDefault()
            setValidNumber(true)
        }else{
            setValidNumber(false)
        }
        

        
    }
    return (
        <footer>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <form>
                            <div className="form-group">
                                <div className="title">فرم تماس</div>
                                <div className="all-input">
                                    <div className="input-group">
                                        <input onChange={(e) => setErrorName(e.target.value)}  type="text" placeholder="نام و نام خانوادگی" />
                                        <div className={`${validName ? "error active" : "error" }`}>این فیلد نمی تواند خالی باشد</div>
                                    </div>
                                    <div className="input-group">
                                        <input onChange={(e) => setErrorTitle(e.target.value)} type="text" placeholder="موضوع" />
                                        <div className={`${validTitle ? "error active" : "error"}`}>این فیلد نمی تواند خالی باشد</div>
                                    </div>
                                    <div className="input-group">
                                        <input onChange={(e) => setErrorEmail(e.target.value)} type="email" placeholder="ایمیل" />
                                        <div className={`${validEmail ? "error active" : "error"}`}>این فیلد نمی تواند خالی باشد</div>
                                    </div>
                                    <div className="input-group">
                                        <input onChange={(e) => setErrorNumber(e.target.value)}  type="text" placeholder="شماره تماس" />
                                        <div className={`${validNumber ? "error active" : "error"}`}>این فیلد نمی تواند خالی باشد</div>
                                </div>
                                </div>
                                <input onClick={showErrors} className="submit" type="submit" value="ارسال اطلاعات" />
                            </div>
                        </form>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div className="academy-desc">
                            <div className="title">آکادمی مخ ثروت ساز</div>
                            <div className="desc">لورم ایپسوم متن ساختگی با تولید ساده نامفهوم لورم ایپسوم متن ساختگی با
                                تولید ساده نامفهوم لورم ایپسوم متن ساختگی با تولید ساده نامفهوم</div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div className="quick-access">
                            <div className="link-group">
                                <div className="title">سایر خدمات</div>
                                <ul className="links">
                                    <li>صفحه اصلی</li>
                                    <li>درباره ما</li>
                                    <li> خدمات</li>
                                    <li>تماس با ما</li>
                                </ul>
                            </div>
                            <div className="link-group">
                                <div className="title">مطالب جدید سایت</div>
                                <ul className="links">
                                    <li>صفحه اصلی</li>
                                    <li>درباره ما</li>
                                    <li> خدمات</li>
                                    <li>تماس با ما</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer