import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";
import styled from "styled-components";

const Prods = styled.div`
  display: center;
  padding: 20px;
  justify-content: space-between;
`;

const CarritoPedidos = ()=>{

    const location = useLocation()
    const { carrito } = location.state

    const handleClick = (e) => {
        alert("Pagado Correctamente")
       
    } 

   
    return (
        <div className="auth-form-container">
            
                <div>
                {carrito.map((cartItem) => (
                    <label>NOMBRE: {cartItem.producto.NombreProducto}    DESCRIPCIÓN:{cartItem.producto.Descripcion}    CANTIDAD:{cartItem.cantidad}<br></br>
                    </label>
                    ))}
                </div>
                <div>
                    <label>Información de Pago: </label>
                    <input type="text" placeholder="Nro. de Tarjeta"></input>
                    <input type="number" placeholder="Mes de expiración"></input>
                    <input type="number" placeholder="Año de expiración"></input>
                    <input type="number" placeholder="CCV"></input>
                    <button onClick={handleClick}>Pagar</button>
                </div>
                
           
        </div>
    )
}
export default CarritoPedidos;