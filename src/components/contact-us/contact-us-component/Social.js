import React from 'react'
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa'

function Social() {
    return (
     
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div className="contact-us-box">
                    <div className="contact-us-item">
                        <div className="title">فضای مجازی <span>آکادمی مخ ثروت ساز</span></div>
                        <ul className="locations child-item">
                            <li>
                                <i><FaInstagram/></i>
                                <p>Academy_mokh_servatsaz</p>
                            </li>
                            <li>
                                <i><FaTelegram/></i>
                                <p>@mokh_servatsaz</p>
                            </li>
                            <li>
                                <i className="fa-brands fa-facebook" ><FaFacebook/></i>
                                <p>mokh_servatsaz_academy</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

     
    )
}

export default Social