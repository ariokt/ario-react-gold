import React from 'react'
import './WhyUsCard.css'

const WhyUsCard = (props) => {
  return (
    <>
        <div className='wucard-container d-flex flex-column p-4 align-items-start'>
            <img src={props.imageSrc} alt=""/>
            <h3 style={{fontSize:"clamp(14px,3vw,16px)", fontWeight:"bold"}}>{props.judul}</h3>
            <p style={{fontSize:"clamp(12px,1vw,14px)", fontWeight:"bold",maxWidth:"220px"}}>{props.keterangan}</p>
        </div>
    </>
  )
}

export default WhyUsCard
