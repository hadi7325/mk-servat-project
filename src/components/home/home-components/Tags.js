import React from 'react'
import { Link } from 'react-router-dom'

function Tags() {
  return (
    <section className='tags'>
    <div className='container'>
        <div className="row align-items-center ">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-5"data-aos="fade-left">
                <div className="title">
                    <h1><span>کلمات کلیدی</span>  آکادمی مخ ثروت ساز</h1>
                </div>
                <li className="desc">لورم ایپسوم متن ساختگی با تولید ساده نتمفهوم</li>

            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className='row align-items-center justify-content-space-between '>
                  <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12">
                <Link to="" className='keyword-item'>
                    <p className='link' >حرفه ای ها در املاک</p>
                </Link>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12">
                <Link to="" className='keyword-item'>
                    <p className='link pro' to="">راز های موفقیت در کسب و کار</p>
                </Link>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12">
                <Link  to="" className='keyword-item'>
                    <p className='link'>فروشنده حرفه ای</p>
                </Link>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12">
                <Link to="" className='keyword-item'>
                    <p className='link' >مذاکره</p>
                </Link>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12">
                <Link to="" className='keyword-item'>
                    <p className='link' >برند سازی</p>
                </Link>
            </div>
                  </div>
            </div>


        </div>
    </div>
</section>
  )
}

export default Tags