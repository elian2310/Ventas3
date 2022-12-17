// Importaciones basicas
import React from "react";


// Importaciones de Estilos
import "./styles.css";
import styled from "styled-components";

// Importaciones
import { productos_falsos } from "./DatosFalsos";
import { Producto } from "./Producto";

// Estilos
const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  border: 1px solid;
`;

const Prods = styled.div`
  display: flex;
  padding: 20px;
  flex: 3;
  flex-wrap: wrap;
  justify-content: space-between;
`;

// Codigo
export const ListaProductos = () => {
  return (
    <Container>
      <Prods>
        {productos_falsos.map((item) => (
          <Producto item={item} key={item.CodigoQR} />
        ))}
      </Prods>
    </Container>
  );
};
