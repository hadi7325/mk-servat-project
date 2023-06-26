import React from 'react'
import { FaEnvelope, FaMobileAlt, FaPhone } from 'react-icons/fa'

function Phone() {
    return (
        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div className="contact-us-box">
                <div className="contact-us-item">
                    <div className="title">تماس با  <span>آکادمی مخ ثروت ساز </span></div>
                    <ul className="locations child-item">
                        <li>
                            <i ><FaMobileAlt/></i>
                            <p className="number">0911 395 32 21</p>
                        </li>
                        <li>
                            <i><FaPhone/></i>
                            <p className="number">011 523 4196</p>
                        </li>
                        <li>
                            <i><FaEnvelope/></i>
                            <p>abanowcenter@gmail.com</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Phone