import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = ()=>{

    const handleSubmit = (e) => {
        e.preventDefault();
       
    }

    return (
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <div>
                <label  style={{ width: '300px',  display: 'flex',  gap: '80px', fontSize: '3em'}} for={"text"}>Go to</label>
                
                </div>
                <div>
                <button style={{ fontSize: '2em'}}><Link to="/pedidos">Pedidos</Link></button>
                <button style={{ fontSize: '2em'}}><Link to="/cashier">Punto de venta</Link></button>
                </div>
                
            </form>
        </div>
    )
}

export default Menu;