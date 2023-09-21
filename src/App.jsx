//import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDom from 'react-dom/client';

import Tienda from './components/Tienda';
import About from './components/About';
import Contacto from './components/Contacto';


import{BrowserRouter, Routes, Route} from 'react-router-dom';


import Contenido from './components/Contenido';
import Navbar from './components/Navbar';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>  
      <BrowserRouter>
        <Navbar />   
          <Routes>
            <Route path="/" element={<Contenido />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacto" element={<Contacto />} />
            
          </Routes>
      </BrowserRouter>


        
    </>

  );
}

export default App;
