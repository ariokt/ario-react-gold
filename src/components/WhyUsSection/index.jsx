import award from '../../assets/icon_professional.svg'
import clock from '../../assets/icon_24hrs.svg'
import priceTag from '../../assets/icon_price.svg'
import React from 'react'
import thumbsUp from '../../assets/icon_complete.svg'
import WhyUsCard from '../WhyUsCard'
import './WhyUsSection.css'

const WhyUs = () => {

  const cardContent = [{"id": 1, "image": thumbsUp, "judul": "Mobil Lengkap", "keterangan": "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat"},
                      {"id": 2, "image": priceTag, "judul": "Harga Murah", "keterangan": "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain"},
                      {"id": 3, "image": clock, "judul": "Layanan 24 Jam", "keterangan": "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu"},
                      {"id": 4, "image": award, "judul": "Sopir Profesional", "keterangan": "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu"}]

  return (
    <>
      <section className="why-us mx-auto d-flex flex-column">
          <div className='text-center d-flex flex-column gap-3 mb-3 mb-md-5'>
            <h2>Why Us?</h2>
            <p>Mengapa harus pilih Binar Car Rental?</p>            
          </div>
          <div className="d-flex flex-column flex-md-row " style={{gap:"clamp(8px,1vw,16px)"}}>
            {cardContent.map(item => <WhyUsCard key={item.id} imageSrc={item.image} judul={item.judul} keterangan={item.keterangan}/>)}
          </div>
      </section>
    </>
  )
}

export default WhyUs
