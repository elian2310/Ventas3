//import Products from "./products"
//import Header from "./title"
import Products from "../Components/ICajeroComponents/products"
import Header from "../Components/ICajeroComponents/title"
import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"

const CashierPage = () => {
return(

    <div>
        <Header/>
        <Products/>
        <button><Link to="/pedidos">Pedidos</Link></button>
        <button><Link to="/facturas">VistaFactura</Link></button>
    </div>

)

}

export default CashierPage