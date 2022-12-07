// Importaciones basicas

// Importaciones de Estilos

// Importaciones
import {Barra} from "./Barra";
import {ListaProductos} from './ListaProductos'

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
