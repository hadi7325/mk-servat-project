import React,{useState} from 'react'
import Footer from '../footer/Footer'
import Nav from '../Nav'
import "./sass.scss"
function SignIn() {
    const [errorName, setErrorName] = useState("")
    const [errorTitle, setErrorTitle] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorNumber, setErrorNumber] = useState("")
    
    const [validName,setValidName] = useState(false)
    const [validTitle,setValidTitle] = useState(false)
    const [validEmail,setValidEmail] = useState(false)
    const [validNumber,setValidNumber] = useState(false)

    const showError = (e) => {
   
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
        <>
        <Nav/>
        <section className="sign-in-section">
            <div className="container ">
                <div className="title"> ورود و ثبت نام در <span>آکادمی مخ  ثروت ساز</span></div>
                <div className="row">
                    <div className="col-12">
                        <div className="sign-in-box">
                            <form className="form-sign-in">
                                <div className="sign-in-item">
                                    <div className="all-input">
                                        <div className="grouping">
                                            <input type="text" onChange={(e) => setErrorName(e.target.value)} placeholder="نام و نام خانوادگی" />
                                            <div className={`${validName ? "error active" : "error"}`}>این فیلد نمی تواند خالی باشد</div>
                                        </div>
                                        <div className="grouping">
                                            <input className="number" onChange={(e) => setErrorNumber(e.target.value)} type="number" placeholder="شماره تماس" />
                                            <div className={`${validNumber ? "error active" : "error"}`}>این فیلد نمی تواند خالی باشد</div>
                                        </div>
                                        <div className="grouping">
                                            <input type="text" onChange={(e) => setErrorEmail(e.target.value)} placeholder="ایمیل" />
                                            <div className={`${validEmail ? "error active" : "error"}`}>این فیلد نمی تواند خالی باشد</div>
                                        </div>
                                        <div className="grouping">
                                            <input type="text" onChange={(e) => setErrorTitle(e.target.value)} placeholder="شهر" />
                                            <div className={`${validTitle ? "error active" : "error"}`}>این فیلد نمی تواند خالی باشد</div>
                                        </div>
                                    </div>
                                    <input onClick={showError} className="submit" type="submit" value="ارسال اطلاعات" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>

    )
}

export default SignIn