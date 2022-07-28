import correctList from '../../assets/check.svg'
import personImage from '../../assets/img_service.svg'
import React from 'react'
import './OurService.css'

const OurService = () => {
  const listContent = ["Sewa Mobil Dengan Supir di Bali 12 Jam", "Sewa Mobil Lepas Kunci di Bali 24 Jam", "Sewa Mobil Jangka Panjang Bulanan",
                       "Gratis Antar - Jemput Mobil di Bandara","Layanan Airport Transfer / Drop In Out"]

  return (
    <>
      <section className="our-service d-flex flex-column flex-md-row mx-md-auto my-5">
        <div className="our-service__left">
            <img src={personImage} alt="service image" style={{width:"100%",height:"auto"}}/>
        </div>
        <div className="our-service__right d-flex flex-column">
            <h2 className='mb-3 mb-md-4' style={{fontSize:"24px", fontWeight:"bold"}}>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
            <p className='mb-3' style={{fontSize:"14px", fontWeight:"bold"}}>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, 
                kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, 
                bisnis, wedding, meeting, dll.</p>
            <ul className="list-unstyled d-flex flex-column our-service__list">
                {listContent.map(item => <li className='d-flex'><img src={correctList} className='me-3'/><p>{item}</p></li>)}
            </ul>
        </div>
      </section>
    </>
  )
}

export default OurService
