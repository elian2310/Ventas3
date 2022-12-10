// Importaciones basicas

// Importaciones de Estilos

// Importaciones
import {Barra} from "./Barra";
import {ListaProductos} from './ListaProductos'
import React from "react";
// Estilos

//Codigo
const PedidosPage = () => {
  return (
    <div>
      <Barra />
      <h1>Lista de Productos</h1>
      <ListaProductos/>
    </div>
  );
}

export default PedidosPage
