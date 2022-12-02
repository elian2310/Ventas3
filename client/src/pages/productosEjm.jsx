import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Productos = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        const fetchAllProducts = async () => {
            try{
                const res = await axios.get("http://localhost:8800/productos")
                setProductos(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchAllProducts()
    }, [])

    return (
        <div>Ejemplo Productos</div>
    )
}

export default Productos