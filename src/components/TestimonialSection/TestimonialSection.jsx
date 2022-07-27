import customerImage1 from '../../assets/img_photo.svg'
import customerImage2 from  '../../assets/img_photo_2.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import './TestimonialSection.css'

const Testimonial = () => {

  const [dataTestimoni] = useState([
    {
      id: 1,
      image: customerImage1,
      rating: 4,
      testimoni: "Aplikasinya sangat bagus. Jadi lebih mudah dalam mencari mobil untuk berlibur di kampung halaman",
      identitas: "Ario, Jakarta"
    },
    {
      id: 2,
      image: customerImage2,
      rating: 5,
      testimoni: "Aplikasinya sangat bagus. Jadi membantu saya untuk mencari mobil saat dinas ke luar kota",
      identitas: "Waskita, Bali"
    },
    {
      id: 3,
      rating: 4,
      image: customerImage1,
      testimoni: "Aplikasinya lumayan lengkap. Jadi membantu saya untuk mencari mobil yang saya inginkan",
      identitas: "Andra, Bandung"
    }
  ]);

  const slider = useRef();

  const next = () => {
    slider.current.slickNext();
  };
  const prev = () => {
    slider.current.slickPrev();
  }; 
  
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    centerPadding: "25%",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "0"
        }
      }
    ],
    speed: 500 
  };

  return (
    <>
      <section style={{margin:"50px 0"}}>
        <div className="testimonial__top d-flex flex-column align-items-center">
          <h2>Testimonial</h2>
          <p>Berbagai review positif dari para pelanggan kami</p>
        </div>
        <Slider ref={slider} {...settings}>
          {dataTestimoni.map(datum => <TestimonialCard key={datum.id} image={datum.image} rating={datum.rating} testimoni={datum.testimoni} identitas={datum.identitas}/>)}
        </Slider> 
        <div className="d-flex justify-content-center mt-3" style={{gap:"2vw"}}>
            <button className="slider-button" onClick={prev}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="slider-button" onClick={next}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
      </section>
    </>
  )
}

export default Testimonial

