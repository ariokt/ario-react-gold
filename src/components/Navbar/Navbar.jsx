import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../assets/logoipsum.svg'
import React from 'react'
import { useRef } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const overlayMenu = useRef();

  const openMenu = () => {
    overlayMenu.current.style.width= "100%";
  }
  const closeMenu = () => {
    overlayMenu.current.style.width= "0";
  }
  
  
  return (
    <nav className="navigation d-flex py-4 align-items-center position-fixed w-100 justify-content-between" style={{paddingRight:"10%", paddingLeft:"5%"}}>
      <Link to='/'><img src={Logo} alt="brand logo" style={{width:"100px", height:"auto"}}/></Link>    
      <div ref={overlayMenu} className="menu-container align-items-center ms-auto" id="myNav">
          <div className="overlay-content d-flex">
              <div className="overlay-content__top d-flex align-items-center">
                  <p className="judul-nav-mobile d-block d-md-none m-0" >BCR</p>
                  <span>
                      <FontAwesomeIcon icon={faXmark} className="d-block d-md-none" onClick={closeMenu}/>
                  </span>
              </div> 
              <ul className="menu list-unstyled text-decoration-none d-flex mb-0">
                  <li><a className='text-decoration-none px-md-4 py-md-4' style={{color:"black"}} href="#our-service-sec">Our Service</a></li>
                  <li><a className='text-decoration-none px-md-4 py-md-4' style={{color:"black"}} href="#why-us-sec">Why Us</a></li>
                  <li><a className='text-decoration-none px-md-4 py-md-4' style={{color:"black"}} href="#testimoni">Testimonial</a></li>
                  <li><a className='text-decoration-none px-md-4 py-md-4' style={{color:"black"}} href="#faq">FAQ</a></li>
              </ul>    
          </div>
      </div>
      <span >
        <FontAwesomeIcon icon={faBars} className="d-block d-md-none" onClick={openMenu}/>
      </span>
    </nav>
  )
}

export default Navbar
