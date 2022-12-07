import React, {userState} from 'react';
import logo from './logo.jpeg';
import logo1 from './logo1.jpeg';
import { SliderData } from './SliderData';
import ImageSlider from './ImageSlider';


function Item() {
    const handleSubmit = e => {e.preventDefault();
    };
    

  return (
    <form className='ItemView' onSubmit={handleSubmit}>
        <h1>Producto: (nombre del producto)</h1>
        <ImageSlider slides={SliderData}/>
        

        <h2>Descripcion del producto: <br></br>
        Este producto es bla bla bla bla bla <br></br> 
        <br></br>
        Detalles: <br></br>
        Detalle 1<br></br>
        Detalle 2<br></br>
        <br></br>
        Percio:<br></br>
        00.00
        </h2>
        
        
    </form>
  );
}

export default Item