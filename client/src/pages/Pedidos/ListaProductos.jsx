// Importaciones basicas
import React from "react";


// Importaciones de Estilos
import "./styles.css";
import styled from "styled-components";

// Importaciones
//import { productos } from "./DatosFalsos";
import { Producto } from "./Producto";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import https from "https";

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

  const [productos, setDataCuf] = useState([])

    useEffect(() => {
        getCUFWithFetch();
    }, []);

    const getCUFWithFetch = async () => {
        
        const response = await axios.get("http://localhost:8800/getProductos");
        
        setDataCuf(response.data);
    };
    console.log(productos)

  return (
    <Container>
      <Prods>
        {productos.map((item) => (
          <Producto item={item} key={item.CodigoQR} />
        ))}
      </Prods>
    </Container>
  );
};
