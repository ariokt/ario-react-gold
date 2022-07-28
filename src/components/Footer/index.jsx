import React from 'react'
import Logo from '../../assets/logoipsum.svg'
import facebook from '../../assets/icon_facebook.svg'
import instagram from '../../assets/icon_instagram.svg'
import mail from '../../assets/icon_mail.svg'
import twitch from '../../assets/icon_twitch.svg'
import twitter from '../../assets/icon_twitter.svg'

const Footer = () => {
    const centerElement = ["Our Service", "Why Us", "Testimonial", "FAQ"];
    const cwuElement = [facebook, instagram, twitter, mail, twitch];
  return (
    <>
        <footer className="d-flex flex-column justify-content-center flex-md-row gap-3 gap-md-5 pb-5" style={{width:"80%", margin:"7vw auto 0 auto"}}>
            <div className="d-flex flex-column gap-3">
                <p className='fw-bold' style={{maxWidth:"268px"}}>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p className='fw-bold'>binarcarrental@gmail.com</p>
                <p className='fw-bold'>081-233-334-808</p>
            </div>
            <div className="d-flex flex-column gap-3" style={{textDecoration:"none"}}>
                {centerElement.map(element => <a href="#">{element}</a>)}
            </div>
            <div className='d-flex flex-column flex-lg-row gap-3 gap-lg-5'>
                <div className="d-flex flex-column gap-3">
                    <p className='m-0'>Connect with us</p>
                    <div className='d-flex flex-row gap-3'>
                        {cwuElement.map(item => <a href="#"><img src={item} alt="" /></a>)}
                    </div>
                </div>
                <div className="d-flex flex-column gap-3" style={{gap:"16px"}}>
                    <p className='m-0'>Copyright Binar 2022</p>
                    <img src={Logo} alt="brand logo" style={{width:"100px", height:"auto"}}/>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
