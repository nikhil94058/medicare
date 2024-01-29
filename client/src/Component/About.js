import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const About = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{
      backgroundImage: "url(/pics/about.svg)", backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      <Navbar />
      <div>
        <div className="w-[653px] h-[101px] relative m-9">
          <div className="w-[653px] h-[101px] text-black text-8xl font-normal font-['Jacques Francois']">ABOUT </div>
          <div className="w-[150px] h-[101px] left-[414px] top-[100px] absolute opacity-0 text-black text-8xl font-normal font-['Jacques Francois']">US</div>
          <div className='overflow-y-auto h-[400px] w-[1200px]'>
            <div className="w-[1292px] h-[2212px] text-black text-4xl font-normal font-['Jacques Francois']"><br />Welcome to AyurMed<br />At AyurMed, we believe in transforming healthcare through innovation, compassion, and seamless connectivity. Our mission is to empower both patients and healthcare providers with a comprehensive platform that enhances the entire healthcare experience.<br />Who We Are<br />Founded on the principles of accessibility, transparency, and patient-centric care, AyurMed is a groundbreaking medical app that brings patients and doctors closer than ever before. We understand the challenges individuals face in managing their health, and we are committed to providing solutions that simplify and enhance every aspect of healthcare.<br />Our Vision<br />Our vision is to create a world where healthcare is not just a service but a collaborative journey. We envision a future where patients have easy access to quality healthcare, doctors can provide personalized care effortlessly, and technology acts as a bridge, connecting them in ways that were once unimaginable.<br />What Sets Us Apart<br />Innovative Blockchain Technology: AyurMed employs state-of-the-art blockchain technology to secure and centralize patient data. This ensures the highest level of security, integrity, and accessibility for both patients and doctors.<br />AI-Powered Symptom Checker: Our symptom checker utilizes cutting-edge artificial intelligence to assist patients in understanding and diagnosing their symptoms accurately. This tool evolves continuously to provide the most up-to-date and precise information.<br />End-to-End Healthcare Ecosystem: From appointment booking to virtual consultations, prescription management, and lab test coordination, AyurMed offers a holistic healthcare ecosystem that simplifies the entire healthcare journey.<br />Our Commitment<br />Patient-Centric Approach: AyurMed is built with patients at the center. We strive to make healthcare accessible, convenient, and tailored to individual needs. Your health is our priority, and we are here to support you every step of the way.<br />Continuous Improvement: We are committed to continuous innovation and improvement. AyurMed evolves with the latest advancements in technology and healthcare practices to ensure you receive the best possible care.<br />Join Us in Transforming Healthcare<br />We invite you to join us on this transformative journey. Whether you are a patient seeking better healthcare management or a healthcare provider aiming to enhance patient care, AyurMed is here for you.<br />Thank you for choosing AyurMed – where healthcare meets innovation.<br /><br /></div>
          </div>
        </div>
      </div>

    </div>
  );
};
