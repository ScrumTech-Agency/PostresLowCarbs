import "./App.css";
import React from "react";
import Header from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import Home from './components/Home';
import Ventas from './components/Ventas';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductDetails } from "./components/products/ProductsDetails";


function App() {
  return (
    <Router>
    <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Home" element={<Home />}/>
            <Route path="/Ventas" element={<Ventas />}/>
            <Route path='/producto/:id' element={<ProductDetails />}/>
          </Routes>
        </div>
        <Footer />
    </div>
    </Router>
       
  );
}

export default App;
