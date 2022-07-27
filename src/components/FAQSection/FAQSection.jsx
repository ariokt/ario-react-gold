import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const FAQSection = () => {
  return (
    <>
        <section className="faq d-flex flex-column flex-md-row  mx-auto" style={{width:"80%", gap:"10vw", margin:"50px 0"}}>
            <div className="faq__left d-flex flex-column gap-3">
                <h2>Frequently Asked Question</h2>
                <p style={{fontWeight:"bold"}}>Pertanyaan yang biasa ditanyakan oleh pengguna. Mohon dibaca terlebih dahulu. Jika kurang jelas bisa langsung hubungi kami!</p>
            </div>
            <div>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography>Apa saja syarat yang dibutuhkan?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Minimal harus sudah memiliki KTP ya, baru bisa menggunakan jasa kami.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <br/>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography>Berapa hari minimal sewa mobil lepas kunci?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Minimal 1 hari atau 24 jam. Lebih lama tentu akan ada diskon menarik ya hehe
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <br/>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography>Berapa hari sebelumnya sabaiknya booking sewa mobil?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Dua hari sebelum penggunaan. Hal ini bertujuan agar kami dapat mempersiapkan kendaraan dengan maksimal.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <br/>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography>Apakah Ada biaya antar-jemput?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Tidak ada! Biaya tersebut sudah masuk ke dalam biaya penyewaan ya
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <br/>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography>Bagaimana jika terjadi kecelakaan</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Tentu harus bertanggung jawab yaa, Mohon berkendara dengan bijak
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </section>
    </>
  )
}

export default FAQSection
