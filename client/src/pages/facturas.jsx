import React from "react";
import ReactDOM from "react-dom/client";


const handleChange = (e) => {
  console.log(e.target.value);
};

const Facturas = () => {
    return (
    <div>
        <div style={{ background: "#202020", color: "#fff", padding: "20px" }}>
          <h1> Vista previa factura</h1>
        </div>
        
        <p style={{ fontWeight: "lighter", fontSize: "2em" }}>
          Razon Social :{" "}
          <input
            style={{ fontSize: "0.7em" }}
            id="razonsocial"
            onChange={handleChange}
          />
        </p>
    
        <p style={{ fontWeight: "lighter", fontSize: "2em" }}>
          NIT :{" "}
          <input style={{ fontSize: "0.7em" }} id="nit" onChange={handleChange} />
        </p>
    
        <h2 style={{ fontWeight: "lighter" }}>*Inserte Informacion de factura*</h2>
    
        <Button text="Imprimir" />
        {/*<Button text="Modificar" />*/}
        <Button text="Eliminar" />
    </div>)
  
};

function Button({ text }) {
    console.log({ text });
    return (
      <button 
        onClick={function () {
          console.log("Loading....");
          alert("Estas seguro de que deseas "+text+ " la factura")
          //insertar funcion del boton     
         
        }}style={{ width: '300px', align: "center", fontSize: '2em'}} >
        <p> {text}</p>
      </button>
    );
}
  

export default Facturas