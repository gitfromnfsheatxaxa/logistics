// src/App.js
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import './index.css';
import AbourtCom from "./components/AboutCom/AbourtCom.jsx";
import JobCom from "./components/JobCom/JobCom.jsx";
import ContactCom from "./components/ContactCom/ContactCom.jsx";
import NavbarCom from "./components/NavbarCom/NavbarCom.jsx";
import FooterCom from "./components/FooterCom/FooterCom.jsx";
import HomeCom from "./components/HomeCom/HomeCom.jsx";

function App() {
  return (
      <div  className="app">
        <NavbarCom/>
        <main>
          <Routes>
            <Route path="/" element={<HomeCom/>}/>
            <Route path="/about" element={<AbourtCom/>} />
            <Route path="/job" element={<JobCom/>} />
            <Route path="/contact" element={<ContactCom/>} />
          </Routes>
        </main>
        <FooterCom/>
      </div>
  );
}

export default App;
