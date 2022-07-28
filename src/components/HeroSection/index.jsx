import Button from '@mui/material/Button';
import hero from '../../assets/img_car.svg';
import { Link } from 'react-router-dom';
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <>
      <section className="hero-sec d-flex align-items-center">
          <div className="hero-desc pb-md-4 d-flex flex-column gap-3" style={{paddingLeft:"5%", paddingRight:"5%"}}>
              <h1 style={{fontSize:"36px", fontWeight:"bold"}}>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p style={{maxWidth:"468px", fontSize:"14px", fontWeight:"bold"}}>
                Selamat datang di Binar Car Rental. 
                Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. 
                Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <Link to='/car-list' style={{ textDecoration: 'none' }} className="cta-button"><Button variant="contained" color="success" className='text-capitalize'>Mulai Sewa Mobil</Button></Link>    
          </div>
          <div className="hero-right">
              <img src={hero} alt="mobil" style={{width:"100%", height:"auto"}}/>
          </div>
      </section>
    </>
  )
}

export default HeroSection
