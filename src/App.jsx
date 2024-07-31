
import Home from './Pages/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Amenities from './Pages/Amenities';
import Resturant from './Pages/Resturant';
import Accomodation_index from './Pages/Accomodation_index';

function App() {
  const AOSInit = ({ children }) => {
    useEffect(() => {
      AOS.init({
        duration: 1200,
        easing: 'ease-in-out-quart',
      });
    }, []);

    return <>{children}</>;
  };


  return (
    <AOSInit>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/amenities' element={<Amenities />} />
        <Route path='/bar' element={<Resturant/>}/>
        <Route path='/accomodate' element={<Accomodation_index/>}/>

      </Routes>


    </AOSInit>
  )
}

export default App
