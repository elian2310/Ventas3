// Importaciones basicas
import React from "react";

// Importaciones de Estilos
import "./styles.css";
import styled from "styled-components";

// Importaciones
import { AiOutlineShoppingCart } from "react-icons/ai";

// Estilos (Barra)
const ContenedorBarra = styled.div`
  height: auto;
  background: #d1b7a1;
`;

const BarraEstilo = styled.div`
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BarraIzquierda = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const BarraCentro = styled.div`
  flex: 1;
  text-align: center;
`;

const BarraDerecha = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

// Estilos (Otros)
const Busqueda = styled.div`
  border: 1px solid;
  margin-left: 5px;
`;

const Inicio = styled.h1`
  cursor: pointer;
`;

// Funciones boton
function clickVerCarrito() {
  alert("Viendo carritos");
}

function clickInicio() {
  alert("Volviendo al inicio");
}

// Codigo
export const Barra = () => {
  return (
    <ContenedorBarra>
      <BarraEstilo>
        <BarraIzquierda>
          <span>Buscar:</span>
          <Busqueda>
            <input
              type="text"
              placeholder=""
              className=""
              style={{ width: "200px" }}
            />
          </Busqueda>
        </BarraIzquierda>
        <BarraCentro>
          <Inicio onClick={clickInicio}>Pedidos</Inicio>
        </BarraCentro>
        <BarraDerecha>
          <AiOutlineShoppingCart
            style={{ height: "80px", width: "80px", cursor: "pointer" }}
            onClick={clickVerCarrito}
          />
        </BarraDerecha>
      </BarraEstilo>
    </ContenedorBarra>
  );
};
