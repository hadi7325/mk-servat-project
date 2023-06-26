import React from 'react'

function Filter({sortNew,sortOld,sortInExpencive,sortExpencive}) {
   
    return (

        <ul className="menu">

            <li   className="tab" onClick={sortNew}>جدید ترین</li>               
            <li   className="tab" onClick={sortOld}>قدیمی ترین</li>               
            <li   className="tab" onClick={sortInExpencive}>ارزان ترین</li>               
            <li   className="tab" onClick={sortExpencive}>گران ترین</li>              

        </ul>

    )
}

export default Filter