import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from "./pages/Home/Home";
import Yanxue from "./pages/Yanxue/Yanxue";
import Xuanxiao from "./pages/Xuanxiao/Xuanxiao";
import Consult from "./pages/Consult/Consult";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yanxue" element={<Yanxue />} />
        <Route path="/xuanxiao" element={<Xuanxiao />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

