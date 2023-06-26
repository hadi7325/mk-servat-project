import React from 'react'
import {MdOutlineMyLocation } from 'react-icons/md'

function Address() {
    return (
        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div className="contact-us-box">
                <div className="contact-us-item">
                    <div className="title">آدرس <span>آکادمی مخ ثروت ساز</span></div>
                    <ul className="locations child-item">
                        <li>
                            <i><MdOutlineMyLocation/></i>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است</p>
                        </li>
                        <li>
                            <i><MdOutlineMyLocation/></i>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Address