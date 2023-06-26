import React from 'react'
import {FaChevronLeft} from "react-icons/fa"
function PaperResent() {
  return (
   <section className="papers-resent">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12">
        <div className="title"><span>پکیج</span> های اخیر و پربازدید آکادمی مخ ثروت ساز</div>
        <div className="desc">
          <li>لورم ایپسوم متن ساختگی با تولید ساده نامفهوم</li>
          <li>لورم ایپسوم متن ساختگی با تولید ساده نامفهوم</li>
          <span className="see-all">مشاهده همه</span>
        </div>
      </div>
      <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12">
        <div className="papers-resent-item">
          <div className="intro">
            <div className="name">مقاله شماره یک آکادمی مخ ثروت ساز</div>
            <div className="desc">لورم ایپسوم متن ساختگی با تولید ساده نامفهوم لورم ایپسوم متن ساختگی با
              تولید ساده نامفهوم لورم ایپسوم متن ساختگی با تولید ساده نامفهوم</div>
            <span >مشاهده بیشتر <i><FaChevronLeft/></i></span>
          </div>
          <div className="paper-resent-img">
            <img src="./images/product/Rectangle 9.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default PaperResent