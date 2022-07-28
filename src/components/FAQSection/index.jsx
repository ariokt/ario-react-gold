import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const FAQSection = () => {

    const dataFAQ = [{"id":1, "question": "Apa saja syarat yang dibutuhkan?", "answer": "Minimal harus sudah memiliki KTP ya, baru bisa menggunakan jasa kami."},
    {"id":2, "question": "Berapa hari minimal sewa mobil lepas kunci?", "answer": "Minimal 1 hari atau 24 jam. Lebih lama tentu akan ada diskon menarik ya hehe"},
    {"id":3, "question": "Berapa hari sebelumnya sabaiknya booking sewa mobil?", "answer": "Dua hari sebelum penggunaan. Hal ini bertujuan agar kami dapat mempersiapkan kendaraan dengan maksimal."},
    {"id":4, "question": "Apakah Ada biaya antar-jemput?", "answer": "Tidak ada! Biaya tersebut sudah masuk ke dalam biaya sewa ya"},
    {"id":5, "question": "Bagaimana jika terjadi kecelakaan?", "answer": "Tentu harus bertanggung jawab yaa, Mohon berkendara dengan bijak"}]

  return (
    <>
        <section className="faq d-flex flex-column flex-md-row  mx-auto" style={{width:"80%", gap:"10vw", margin:"50px 0"}}>
            <div className="faq__left d-flex flex-column gap-3">
                <h2>Frequently Asked Question</h2>
                <p style={{fontWeight:"bold"}}>Pertanyaan yang biasa ditanyakan oleh pengguna. Mohon dibaca terlebih dahulu. Jika kurang jelas bisa langsung hubungi kami!</p>
            </div>
            <div>
                {dataFAQ.map(item => (
                    <Accordion key={item.id} sx={{mb:"16px"}}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header" >
                            <Typography>{item.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {item.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </section>
    </>
  )
}

export default FAQSection
