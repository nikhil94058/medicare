import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Navbar';
import { Hero } from './Component/Hero';
import Ask from './Component/Ask';
import { Testimonials } from './Component/Testimonials';
import { DoctorPage } from './Component/DoctorPage';


function App() {
  return (
    <div className="w-[1728px] h-[3737px] relative bg-sky-500 items-center">
      <p> Ayurmed</p>
      <Navbar />
      <Hero />
      <Ask />
      <Testimonials />

    </div>
  );
}

export default App;
