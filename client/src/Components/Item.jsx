import React, {userState} from 'react';
import logo from './logo.jpeg';
import logo1 from './logo1.jpeg';
import { SliderData } from './SliderData';
import ImageSlider from './ImageSlider';
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import https from "https";




function Item() {
  const location = useLocation()
  const { CodigoQR } = location.state
    const handleSubmit = e => {e.preventDefault();
    };

    const [product, setDataCuf] = useState([])

    const urlreq = "http://localhost:8800/getProductoByQR"

    useEffect(() => {
        getCUFWithFetch();
    }, []);

    const getCUFWithFetch = async () => {
        const response = await axios.get(urlreq, {
          params: {
            CodigoQR: CodigoQR
          }
        });       
        setDataCuf(response.data);
    };
    console.log(product)
    

  return (
    <form className='ItemView' onSubmit={handleSubmit}>
        <h1>Producto: {product[0].NombreProducto}</h1>
        <ImageSlider slides={SliderData}/>
        

        <h2>Descripcion del producto: <br></br>
        {product[0].Descripcion} <br></br> 
        
        <br></br>
        Percio:<br></br>
        {product[0].Precio}
        </h2>
        
        
    </form>
  );
}

export default Item