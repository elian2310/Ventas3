import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const urlApi = "https://swapi.dev/api/people/1/"

const Productos = () => {
    const [productos, setProductos] = useState({})

    useEffect(() => {
        getUserWithFetch();
    }, []);

    const getUserWithFetch = async () => {
        const response = await fetch(urlApi);
        const jsonData = await response.json();
        setProductos(jsonData);
    };

    return (
        <div className="productos">
            <div className="contenedor">
                <h5>{productos.name}</h5>
            </div>
            
        </div>
    )
}

export default Productos