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




const Item = () => {
  const location = useLocation()
  const { CodigoQR, nombre, descripcion, precio } = location.state
    const handleSubmit = e => {e.preventDefault();
    };

    const [product, setDataCuf] = useState([])

    

    useEffect(() => {
        getCUFWithFetch();
    }, []);

    const getCUFWithFetch = async () => {
        
      const response = await axios.get("http://localhost:8800/getProductos");
      
      setDataCuf(response.data);
  };
  console.log(product)
    

  return (
    <form className='ItemView' onSubmit={handleSubmit}>
        <h1>Producto: {nombre}</h1>
        
        

        <h2>Descripcion del producto: <br></br>
        {descripcion} <br></br> 
        
        <br></br>
        Percio:<br></br>
        {precio}
        </h2>
        
        
    </form>
  );
}

export default Item