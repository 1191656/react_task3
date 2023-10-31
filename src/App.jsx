import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home.jsx";
import Products from "./components/Products/Products.jsx"
import Resturent from "./components/Resturent/Resturent.jsx";
import Salad from "./components/Resturent/Salad.jsx";
import Pizza from "./components/Resturent/Pizza.jsx";
import Onion from "./components/Resturent/Onion.jsx";
import PageNoteFound from "./components/PageNoteFound/PageNoteFound.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/resturent' element={<Resturent />}/>
          <Route path='/restaurant/salad' element={<Salad />}/>
          <Route path='/restaurant/pizza' element={<Pizza />}/>
          <Route path='/restaurant/onion' element={<Onion />}/>
          <Route path='*' element={<PageNoteFound />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
