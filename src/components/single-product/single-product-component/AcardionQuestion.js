import React, { useState } from 'react'
import dataQusetion from "../data-question"
import Qusetion from './Qusetion'
function AcardionQuestion() {
  
    return (
        <section className="frequently-question">
            <div className="container">
                <div className="title">سوالات متداول</div>
                <div className="row">
                    <div className="col-12 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="question-item">
                            {
                                dataQusetion.map((item) =>
                                  
                                       <Qusetion key={item.id} item={item} />
                                    
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default AcardionQuestion