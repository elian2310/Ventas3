// Importaciones basicas
import React from "react";

// Importaciones de Estilos
import "./styles.css";
import styled from "styled-components";

// Importaciones
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

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
  alert("viendo detalles");
}

function clickVerAgregar() {
  alert("Se agrego su producto!");
}

// Codigo
export function Producto({ item }) {
  return (
    <ContenedorProducto>
      <ContenedorIzquierda>
        <Imagen src="/logo192.png" />
      </ContenedorIzquierda>
      <ContenedorCentro>
        <Info>
          <TituloProducto>{item.Nombre}</TituloProducto>
          <div>
            <AiFillStar style={{ color: "red" }} />
            <AiFillStar style={{ color: "red" }} />
            <AiFillStar style={{ color: "red" }} />
            <AiFillStar style={{ color: "red" }} />
            <AiFillStar style={{ color: "red" }} />
          </div>
          <p>Descripcion:</p>
          <p></p>
        </Info>
      </ContenedorCentro>
      <ContenedorDerecha>
        <h2>{item.Costo}</h2>
        <div>Envio Gratis</div>
        <div style={{ marginTop: "20px" }}>
          <Boton1 onClick={clickVerDetalles}>
            <Link to="/itemview">Ver Detalles</Link>
          </Boton1>
          {/*<Boton2 onClick={clickVerAgregar}>Agregar</Boton2>*/}
        </div>
      </ContenedorDerecha>
    </ContenedorProducto>
  );
}
