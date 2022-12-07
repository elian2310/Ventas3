import React, { Component, useEffect } from "react";
import "./style.css"
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AddProductos from "./pages/addejm";
import Productos from "./pages/productosEjm";
import UpdProductos from "./pages/updateejm";
import VPreviaFacturas from "./pages/facturas";



function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Productos/>}/>
          <Route path="/addejm" element={<AddProductos/>}/>
          <Route path="/updejm" element={<UpdProductos/>}/>
          <Route path="/facturas" element={<VPreviaFacturas/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
