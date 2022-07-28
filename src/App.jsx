import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CarList from './pages/CarList';
import CarDetail from './pages/CarDetail';
import Home from './pages/Home';
import NotFound from './pages/NotFound'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/car-list' element={<CarList />} />
        <Route path='/car-list/:id' element={<CarDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
