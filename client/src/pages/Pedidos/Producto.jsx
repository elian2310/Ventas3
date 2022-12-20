// Importaciones basicas
import React from "react";

// Importaciones de Estilos
import "./styles.css";
import styled from "styled-components";

// Importaciones
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";

// Estilos (Producto)
const ContenedorProducto = styled.div`
  padding: 10px;
  margin: 20px;
  border: 5px solid;
  border-radius: 15px;
  display: flex;
  text-align: justify;
  gap: 30px;
  height: 25vh;
  width: 80vh;
  position: relative;
  box-shadow: 10px 10px 10px lightgray;
`;

const ContenedorIzquierda = styled.div`
  border: 1px solid;
  border-radius: 15px;
  width: 25vh;
`;

const ContenedorCentro = styled.div`
  border: 1px solid;
  border-radius: 15px;
  width: 30vh;
`;

const ContenedorDerecha = styled.div`
  border: 1px solid;
  border-radius: 15px;
  width: 15vh;
  text-align: center;
  align-items: center;
`;

const Imagen = styled.img`
  border: 1px solid;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`;

const Info = styled.div`
  height: 100%;
  width: 100%;
`;

const TituloProducto = styled.h2`
  font-weight: bold;
`;

// Estilos (Botones)
const Boton1 = styled.button`
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
`;
const Input1 = styled.input`
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  width: 75px
`;

const Boton2 = styled.button`
  background: fixed;
  color: white;
  outline: 0px;
  padding: 5px 10px;
  border: solid;
  border-radius: 5px;
  border-color: white;
  cursor: pointer;
  margin: 5px;
`;

// Funciones boton
function clickVerDetalles() {
  //alert("viendo detalles");
}



// Codigo
export function Producto({ item, addToCart }) {
  const [qty, setQty] = useState('');
  const [updQty, setUpdQty] = useState(qty);

  const handleChangeQty = (event) => {
    setQty(event.target.value);
  }
  const handleClick = () => {
    setUpdQty(qty);
    addToCart({producto: item, cantidad: qty})
  }

  return (
    <ContenedorProducto>
      <ContenedorIzquierda>
        <Imagen src="/logo192.png" />
      </ContenedorIzquierda>
      <ContenedorCentro>
        <Info>
          <TituloProducto>{item.NombreProducto}</TituloProducto>
          <div>
            <AiFillStar style={{ color: "red" }} />
            <AiFillStar style={{ color: "red" }} />
            <AiFillStar style={{ color: "red" }} />
            <AiFillStar style={{ color: "red" }} />
            <AiFillStar style={{ color: "red" }} />
          </div>
          <p style={{fontWeight:"bold"}}>Descripcion:</p>
          <p>{item.Descripcion}</p>
        </Info>
      </ContenedorCentro>
      <ContenedorDerecha>
        <h2>{item.Precio}$</h2>
        <div style={{ marginTop: "20px" }}>
          <Input1 type="number" placeholder="cantidad" id="qty" onChange={handleChangeQty}></Input1>
          {<Boton1 onClick={clickVerDetalles}>
            <Link to="/itemview" state={{CodigoQR: item.CodigoQR, nombre: item.NombreProducto, descripcion: item.Descripcion, precio: item.Precio}}>Ver Detalles</Link>
          </Boton1>}
          {<Boton2 onClick={handleClick}>Agregar</Boton2>}
        </div>
      </ContenedorDerecha>
    </ContenedorProducto>
  );
}
