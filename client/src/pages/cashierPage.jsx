//import Products from "./products"
//import Header from "./title"
import Products from "../Components/ICajeroComponents/products"
import Header from "../Components/ICajeroComponents/title"
import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"

const CashierPage = () => {

    const [lista, setLista] = useState('');

    const childToParent = (childLista) => {
        setLista(childLista);
    }

    

    return(

        <div>
            <Header/>
            <Products childToParent={childToParent}/>
            <button><Link to="/pedidos">Pedidos</Link></button>
            <button><Link to="/facturas" state={{productos: lista}}>Generar Factura</Link></button>
        </div>

    )

}

export default CashierPage