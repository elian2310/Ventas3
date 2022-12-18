import React from "react";
import { useLocation, Link } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Pdf from '../../src/factura.pdf';



const handleChange = (e) => {
  console.log(e.target.value);
};

const Facturas = () => {
  const location = useLocation()
  const { productos } = location.state
  const [datacuf, setDataCuf] = useState({})
  const [razSoc, setRazSoc] = useState('');
  const [updRazSoc, setUpdRazSoc] = useState(razSoc);
  const [nitCli, setNitCli] = useState('');
  const [updNitCli, setUpdNitCli] = useState(nitCli);

  const handleChangeRS = (event) => {
    setRazSoc(event.target.value);
  }
  const handleChangeNC = (event) => {
    setNitCli(event.target.value);
  }

  const handleClick = () => {
    setUpdRazSoc(razSoc);
    setUpdNitCli(nitCli);
    imprimirFactura(productos, datacuf.cuf, datacuf.control, datacuf.monto, datacuf.qr, nitCli, datacuf.fecha, razSoc);
  }

    useEffect(() => {
        getCUFWithFetch();
    }, []);

    const getCUFWithFetch = async () => {
        const response = await axios.get("http://localhost:8800/datosfactura", {
          params: {
            codigo: "A19E23EF34124CD",
            carrito: productos
          }
        });
        
        setDataCuf(response.data);
    };
    console.log(datacuf)
  return (
  <div>
      <div style={{ background: "#202020", color: "#fff", padding: "20px" }}>
        <h1> Información de facturación </h1>
      </div>
      
      <p style={{ fontWeight: "lighter", fontSize: "2em" }}>
        Razon Social :{" "}
        <input
          style={{ fontSize: "0.7em" }}
          id="razonsocial"
          onChange={handleChangeRS}
        />
      </p>
    
      <p style={{ fontWeight: "lighter", fontSize: "2em" }}>
        NIT CLIENTE :{" "}
        <input style={{ fontSize: "0.7em" }} id="nit" onChange={handleChangeNC} />
      </p>

      <p style={{ fontWeight: "lighter", fontSize: "2em" }}>
        CUF :{" "}
        <input style={{ fontSize: "0.7em" }} id="cuf" onChange={handleChange} value={datacuf.cuf} readOnly/>
      </p>

      <p style={{ fontWeight: "lighter", fontSize: "2em" }}>
        Fecha de Emisión :{" "}
        <input style={{ fontSize: "0.7em" }} id="fechaEmision" onChange={handleChange} value={datacuf.fecha} readOnly/>
      </p>

      <p style={{ fontWeight: "lighter", fontSize: "2em" }}>
        Factura Número :{" "}
        <input style={{ fontSize: "0.7em" }} id="nroFact" onChange={handleChange} value={datacuf.nroFactura} readOnly/>
      </p>

      
    
      <button onClick={handleClick}>Generar PDF</button>
      <form action={Pdf} target="_blank">
        <input type="submit" value="Ver PDF" />
      </form>
      {/*<Button text="Modificar" />*/}
      <button><Link to="/cashier"> Volver </Link></button>
  </div>)
  
};

const imprimirFactura = async (productos, cuf, codigo, monto, qr, ci, fecha, nombre) => {
  const response = await axios.get("http://localhost:8800/getFactura", {
    params: {
      productos: productos,
      cuf: cuf,
      codigo: codigo,
      monto: monto,
      qr: qr,
      ci: ci,
      fecha: fecha,
      nombre: nombre
    }
  })
  
  
}


  

export default Facturas