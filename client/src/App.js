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
import Login from "./pages/login";
import Facturas from "./pages/facturas";
import CashierPage from "./pages/cashierPage";
import PedidosPage from "./pages/Pedidos/Pedidos_Main";
import ItemView from "./pages/ItemView";
import Menu from "./pages/menu";
import CarritoPedidos from "./pages/Pedidos/CarritoPedidos";

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/addejm" element={<AddProductos/>}/>
          <Route path="/updejm" element={<UpdProductos/>}/>
          <Route path="/facturas" element={<Facturas/>}/>
          <Route path="/cashier" element={<CashierPage/>}/>
          <Route path="/pedidos" element={<PedidosPage/>}/>
          <Route path="/itemview" element={<ItemView/>}/>
          <Route path="/carrito" element={<CarritoPedidos/>}/>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
