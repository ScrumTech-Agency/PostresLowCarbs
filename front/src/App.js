import "./App.css";
import React from "react";
import Header from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import Home from "./components/Home";
import Ventas from "./components/Ventas";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductDetails } from "./components/products/ProductsDetails";
import HomeAdmin from "./components/HomeAdmin";
import HomeClient from "./components/HomeClient";
import { ModificacionProducto } from "./components/ModificacionProducto";
import Dashboard from './components/admin/Dashboard';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Ventas" element={<Ventas />} />
            <Route path="/producto/:id" element={<ProductDetails />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/HomeAdmin" element={<HomeAdmin />} />
            <Route path="/HomeClient" element={<HomeClient />} />
            <Route
              path="/ModificacionProducto"
              element={<ModificacionProducto />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
