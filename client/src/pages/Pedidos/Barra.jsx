// Importaciones basicas
import React from "react";

// Importaciones de Estilos
import "./styles.css";
import styled from "styled-components";

// Importaciones
import { AiOutlineHome } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";


// Estilos (Barra)
const ContenedorBarra = styled.div`
  height: auto;
  background: #aa30aa;
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
  margin-left: 5px;
`;

const Inicio = styled.h1``;

// Funciones boton
function clickVerCarrito() {
  alert("Viendo carritos");
}



// Codigo
export const Barra = () => {
  const navigate = useNavigate();
  function clickInicio() {
    navigate('/menu');
  }
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
          <Inicio>Pedidos</Inicio>
        </BarraCentro>
        <BarraDerecha>
          <AiOutlineHome
            style={{ height: "80px", width: "80px", cursor: "pointer" }}
            onClick={clickInicio}
          ><Link to="/menu"></Link></AiOutlineHome>
        </BarraDerecha>
      </BarraEstilo>
    </ContenedorBarra>
  );
};
