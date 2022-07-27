import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './CtaBanner.css'

const CtaBanner = () => {
  return (
    <>
        <section className="cta-banner-sec d-flex flex-column align-items-center p-3 p-md-5">
            <h2 className='mb-3' style={{fontSize:"36px"}}>Sewa Mobil di (Lokasimu) Sekarang</h2>
            <p className='mb-4 mb-md-5' style={{maxWidth:"468px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <Link to='/car-list' style={{ textDecoration: 'none' }}><Button variant="contained" color="success" className='text-capitalize'>Mulai Sewa Mobil</Button></Link>    
        </section>
    </>
  )
}

export default CtaBanner
