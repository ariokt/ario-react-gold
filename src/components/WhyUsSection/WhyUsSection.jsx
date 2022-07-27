import award from '../../assets/icon_professional.svg'
import clock from '../../assets/icon_24hrs.svg'
import priceTag from '../../assets/icon_price.svg'
import React from 'react'
import thumbsUp from '../../assets/icon_complete.svg'
import WhyUsCard from '../WhyUsCard/WhyUsCard'
import './WhyUsSection.css'

const WhyUs = () => {
  return (
    <>
      <section className="why-us mx-auto d-flex flex-column">
          <div className='text-center d-flex flex-column gap-3 mb-3 mb-md-5'>
            <h2>Why Us?</h2>
            <p>Mengapa harus pilih Binar Car Rental?</p>            
          </div>
          <div className="d-flex flex-column flex-md-row " style={{gap:"clamp(8px,1vw,16px)"}}>
            <WhyUsCard imageSrc={thumbsUp} judul="Mobil Lengka" keterangan="Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat"/>
            <WhyUsCard imageSrc={priceTag} judul="Harga Murah" keterangan="Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain"/>
            <WhyUsCard imageSrc={clock} judul="Layanan 24 Jam" keterangan="Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu"/>
            <WhyUsCard imageSrc={award} judul="Sopir Profesional" keterangan="Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu"/>
          </div>
      </section>
    </>
  )
}

export default WhyUs
