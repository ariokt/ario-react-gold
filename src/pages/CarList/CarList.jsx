import HeroSection from '../../components/HeroSection/HeroSection'
import Filter from '../../components/Filter/Filter'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import styled from '@emotion/styled'
import Typography from '@mui/material/Typography';

const URL = `https://bootcamp-rent-car.herokuapp.com/admin/car`

const CarList = () => {
  
  const HeroCustom = styled.div`
    .cta-button {
      display: none;
    }
  `;
  
  const CardContainer = styled.section`
    width: 80%;
    margin: 0 auto 100px auto;
    gap: 1vw;
    @media (max-width: 767px) {
      width: 90%;
    }
  `;

  let navigate = useNavigate();

  const [loadError, setLoadError] = useState(false); //untuk parameter apakah data dari API eror atau tidak
  const [cars, setCars] = useState([]); //untuk simpan seluruh data
  const [availCars, setAvailCars] = useState([]);
  const [displayedCars, setDisplayedCars] = useState([]); //untuk nampung data after filter

  const [filtered, setFiltered] = useState(0); //untuk trigger useeffect yang akan melakukan filter data
  
  const [namaMobil, setNamaMobil] = useState(''); //filter nama yang dipilih
  const [kategori, setKategori] = useState(''); //filter kategori yang dipilih
  const [harga, setHarga] = useState(''); //filter harga yang dipilih
  const [status, setStatus] = useState(''); //filter status yang dipilih

  //Ambil data API
  async function getCars() {
    try {
      const request = await fetch(URL);
      const data = await request.json();
      setCars(data);

      let listCar = [... new Set(data.map(car => car.name))].filter(Boolean);
      listCar.unshift("");
      setAvailCars(listCar);

    } catch (error) { 
      setLoadError(true);
    }
  }

  useEffect(() => {
    getCars()
  }, [])
  //Ambil data API END

  // Untuk menerima nilai dari filter
  const filterNama = (value) => {
    setNamaMobil(value)
  }

  const filterKategori = (value) => {
    setKategori(value)
  }

  const filterHarga = (value) => {
    setHarga(value)
  }

  const filterStatus = (value) => {
    setStatus(value)
  }

  const filtering = (value) => {
    setFiltered(filtered + value)
  }
  // Untuk menerima nilai dari filter END

  
  
  
  // Untuk melakukan filtering dari state cars dan simpan hasil
  useEffect(() => {
    if (namaMobil.length == 0 && kategori.length == 0 && harga.length == 0 && status.length == 0) { // semua tidak diisi
      setDisplayedCars(cars);      
    } else if (namaMobil.length > 0 && kategori.length > 0 && harga.length > 0 && status.length > 0) { // semua diisi
      if (harga.includes("-")) {
          let hargaArray = harga.split('-').map(data => parseInt(data));
          let hargaMin = hargaArray[0];
          let hargaMax = hargaArray[1];
          
          const result = cars.filter(datum => datum.name == namaMobil && datum.category == kategori && datum.price >= hargaMin && datum.price <= hargaMax && datum.status.toString() == status);
          setDisplayedCars(result);
          
      } else {
          let hargaInt = parseInt(harga);
          if (hargaInt === 400000) {
              const result = cars.filter(datum => datum.name == namaMobil && datum.category == kategori && datum.price < hargaInt && datum.status.toString() == status);
              setDisplayedCars(result);

          } else if (hargaInt === 600000) {
              const result = cars.filter(datum => datum.name == namaMobil && datum.category == kategori && datum.price > hargaInt && datum.status.toString() == status);
              setDisplayedCars(result);
          }
      }  
    } else if (kategori.length > 0 && harga.length > 0 && status.length > 0) { //data 1 tidak diisi
      if (harga.includes("-")) {
          let hargaArray = harga.split('-').map(data => parseInt(data));
          let hargaMin = hargaArray[0];
          let hargaMax = hargaArray[1];
          
          const result = cars.filter(datum => datum.category == kategori && datum.price >= hargaMin && datum.price <= hargaMax && datum.status.toString() == status);
          setDisplayedCars(result);
          
      } else {
          let hargaInt = parseInt(harga);
          if (hargaInt === 400000) {
              const result = cars.filter(datum => datum.category == kategori && datum.price < hargaInt && datum.status.toString() == status);
              setDisplayedCars(result);
          } else if (hargaInt === 600000) {
              const result = cars.filter(datum => datum.category == kategori && datum.price > hargaInt && datum.status.toString() == status);
              setDisplayedCars(result);
          }
      } 
    } else if (namaMobil.length > 0 && kategori.length > 0 && harga.length > 0) { //data 4 tidak diisi
      if (harga.includes("-")) {
          let hargaArray = harga.split('-').map(data => parseInt(data));
          let hargaMin = hargaArray[0];
          let hargaMax = hargaArray[1];
          
          const result = cars.filter(datum => datum.name == namaMobil && datum.category == kategori && datum.price >= hargaMin && datum.price <= hargaMax);
          setDisplayedCars(result);
          
      } else {
          let hargaInt = parseInt(harga);
          if (hargaInt === 400000) {
              const result = cars.filter(datum => datum.name == namaMobil && datum.category == kategori && datum.price < hargaInt);
              setDisplayedCars(result);
          } else if (hargaInt === 600000) {
              const result = cars.filter(datum => datum.name == namaMobil && datum.category == kategori && datum.price > hargaInt);
              setDisplayedCars(result);
          }
      }
    } else if (namaMobil.length > 0 && harga.length > 0 && status.length > 0) { //data 2 tidak diisi
      if (harga.includes("-")) {
          let hargaArray = harga.split('-').map(data => parseInt(data));
          let hargaMin = hargaArray[0];
          let hargaMax = hargaArray[1];
          
          const result = cars.filter(datum => datum.name == namaMobil && datum.price >= hargaMin && datum.price <= hargaMax && datum.status.toString() == status);
          setDisplayedCars(result);
          
      } else {
          let hargaInt = parseInt(harga);
          if (hargaInt === 400000) {
              const result = cars.filter(datum => datum.name == namaMobil && datum.price < hargaInt && datum.status.toString() == status);
              setDisplayedCars(result);
          } else if (hargaInt === 600000) {
              const result = cars.filter(datum => datum.name == namaMobil && datum.price > hargaInt && datum.status.toString() == status);
              setDisplayedCars(result);
          }
      }
    } else if (namaMobil.length > 0 && kategori.length > 0 && status.length > 0) { //data 3 tidak diisi
      const result = cars.filter(datum => datum.name == namaMobil && datum.category == kategori && datum.status.toString() == status);
      setDisplayedCars(result);

    } else if (harga.length > 0 && status.length > 0) { //data 1 dan 2 tidak diisi
      if (harga.includes("-")) {
          let hargaArray = harga.split('-').map(data => parseInt(data));
          let hargaMin = hargaArray[0];
          let hargaMax = hargaArray[1];
          
          const result = cars.filter(datum => datum.price >= hargaMin && datum.price <= hargaMax && datum.status.toString() == status);
          setDisplayedCars(result);
          
      } else {
          let hargaInt = parseInt(harga);
          if (hargaInt === 400000) {
              const result = cars.filter(datum => datum.price < hargaInt && datum.status.toString() == status);
              setDisplayedCars(result);
          } else if (hargaInt === 600000) {
              const result = cars.filter(datum => datum.price > hargaInt && datum.status.toString() == status);
              setDisplayedCars(result);
          }
      } 
    } else if (namaMobil.length > 0 && status.length > 0) { //data 2 dan 3 tidak diisi
        const result = cars.filter(datum => datum.name == namaMobil && datum.status.toString() == status);
        setDisplayedCars(result);
     
    } else if (namaMobil.length > 0 && kategori.length > 0) { //data 3 dan 4 tidak diisi
        const result = cars.filter(datum => datum.name == namaMobil && datum.category == kategori);
        setDisplayedCars(result);
        
    } else if (kategori.length > 0 && status.length > 0) { //data 1 dan 3 tidak diisi
        const result = cars.filter(datum => datum.category == kategori && datum.status.toString() == status);
        setDisplayedCars(result);
        
    } else if (namaMobil.length > 0 && harga.length > 0) { //data 2 dan 4 tidak diisi
      if (harga.includes("-")) {
          let hargaArray = harga.split('-').map(data => parseInt(data));
          let hargaMin = hargaArray[0];
          let hargaMax = hargaArray[1];
          
          const result = cars.filter(datum => datum.name == namaMobil  && datum.price >= hargaMin && datum.price <= hargaMax);
          setDisplayedCars(result);
          
      } else {
          let hargaInt = parseInt(harga);
          if (hargaInt === 400000) {
              const result = cars.filter(datum => datum.name == namaMobil && datum.price < hargaInt);
              setDisplayedCars(result);
          } else if (hargaInt === 600000) {
              const result = cars.filter(datum => datum.name == namaMobil && datum.price > hargaInt);
              setDisplayedCars(result);
          }
      }     
   } else if (kategori.length > 0 && harga.length > 0) { //data 1 dan 4 tidak diisi
    if (harga.includes("-")) {
        let hargaArray = harga.split('-').map(data => parseInt(data));
        let hargaMin = hargaArray[0];
        let hargaMax = hargaArray[1];
        
        const result = cars.filter(datum => datum.category == kategori  && datum.price >= hargaMin && datum.price <= hargaMax);
        setDisplayedCars(result);
        
    } else {
        let hargaInt = parseInt(harga);
        if (hargaInt === 400000) {
            const result = cars.filter(datum => datum.category == kategori && datum.price < hargaInt);
            setDisplayedCars(result);
        } else if (hargaInt === 600000) {
            const result = cars.filter(datum => datum.category == kategori && datum.price > hargaInt);
            setDisplayedCars(result);
        }
    }   
  } else if (status.length > 0) { //data 1,2 dan 3 tidak diisi or hanya 4
    const result = cars.filter(datum => datum.status.toString() == status);
    setDisplayedCars(result);
  } else if (harga.length > 0) { //hanya 3
    if (harga.includes("-")) {
        let hargaArray = harga.split('-').map(data => parseInt(data));
        let hargaMin = hargaArray[0];
        let hargaMax = hargaArray[1];
        
        const result = cars.filter(datum => datum.price >= hargaMin && datum.price <= hargaMax);
        setDisplayedCars(result);
        
    } else {
        let hargaInt = parseInt(harga);
        if (hargaInt === 400000) {
            const result = cars.filter(datum => datum.price < hargaInt);
            setDisplayedCars(result);
        } else if (hargaInt === 600000) {
            const result = cars.filter(datum => datum.price > hargaInt);
            setDisplayedCars(result);
        }
    } 
  } else if (kategori.length > 0) { //hanya 2
      const result = cars.filter(datum => datum.category == kategori);
      setDisplayedCars(result);
  } else if (namaMobil.length > 0) { //hanya 1
      const result = cars.filter(datum => datum.name == namaMobil);
      setDisplayedCars(result);
  }

}, [filtered])
// Untuk melakukan filtering dari state cars dan simpan hasil END

const handleDetail = (id) => navigate(`/car-list/${id}`)

  return (
    <>
      
      <Navbar />
      <HeroCustom>
        <HeroSection />
      </HeroCustom>
      {loadError && <h2 style={{width:"fit-content", margin:"50px auto"}}>Koneksi Bermasalah, mohon untuk reload halaman</h2>}       
      <Filter pNama={filterNama} pKategori={filterKategori} pHarga={filterHarga} pStatus={filterStatus} pFiltering={filtering} availCars={availCars}/>
      { (displayedCars.length === 0 && filtered > 0) ? (<div style={{width:"fit-content", margin:"50px auto"}}>Maaf, kriteria yang kamu cari tidak ditemukan</div>) : 
      (
        <CardContainer className='d-flex flex-column flex-md-row flex-wrap'>
          {displayedCars.map(car => (
            <Card key={car.id} sx={{ width: {xs:"100%", md:"32%"},
                                      mb: {xs:"16px", sm:"24px"},
                                      p: {xs:"16px", sm:"24px"}
                                  }}>
              <CardMedia
                sx={{ width:"80%",
                      objectFit:"scale-down",
                      height:"160px",
                      marginX:"auto"
                  }}
                component="img"
                image={car.image}
                alt="gambar mobil"
              />
              <CardContent sx={{padding:"0", mb: {xs:"16px", sm:"24px"}}}>
                <Typography gutterBottom variant="p2" component="div">
                  {car.name}
                </Typography>
                <Typography sx={{fontWeight:"bold"}} gutterBottom variant="p" component="div">
                  Rp {Intl.NumberFormat('ID').format(car.price)} / hari
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </Typography>
              </CardContent>             
              <Button sx={{width:"100%"}} size="medium" variant="contained" color="success" className='text-capitalize' onClick={() => handleDetail(car.id)}>Pilih Mobil</Button>
            </Card>
          ))}
        </CardContainer>
      )}
      <Footer />
      
    </>   
  )
}

export default CarList
