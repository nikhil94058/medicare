import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Navbar';
import { Hero } from './Component/Hero';
import Ask from './Component/Ask';
import { Testimonials } from './Component/Testimonials';
import { DoctorPage } from './Component/DoctorPage';
import { Footer } from './Component/Footer';
import File from './File';
import { Routes, Route } from 'react-router-dom';
import { About } from './Component/About';

function App() {
  return (
    <div className="w-[1728px] relative bg-sky-500 items-center">
      {/*<p> Ayurmed</p>
      <Navbar />
      <Hero />
      <Ask />
      <Testimonials />
      <footer>
        <Footer />
      </footer>*/}
      <div className='container'>
        <Routes>
          <Route path="/commit" element={<File />} />
          <Route path="/" element={<DoctorPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
