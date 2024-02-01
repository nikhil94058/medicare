

import { DoctorPage } from './Component/DoctorPage';

import File from './File';
import { Routes, Route } from 'react-router-dom';
import { About } from './Component/About';
import { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"
import { HomePage } from './Component/HomePage';

function App() {
  const [accuracy, setAccuracy] = useState(2);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,

    });
  })

  useEffect(() => {
    fetch("/api/ml")
      .then((res) => res.json())
      .then((data) => setAccuracy(data.accuracy))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (


    <div className='container'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/commit" element={<File />} />
        <Route path="/doctor" element={<DoctorPage />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </div>


  );
}

export default App;
