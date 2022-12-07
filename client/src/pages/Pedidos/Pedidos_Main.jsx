// Importaciones basicas

// Importaciones de Estilos

// Importaciones
import {Barra} from "./Barra";
import {ListaProductos} from './ListaProductos'

// Estilos

//Codigo
export function PedidosPage() {
  return (
    <div>
      <Barra />
      <h1>Lista de Productos</h1>
      <ListaProductos/>
    </div>
  );
}
