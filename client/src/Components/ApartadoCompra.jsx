import React, {useState} from 'react';

function ApartadoCompra() {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        
        
    };

    return (
        <form className='ApartadoCompra' onSubmit={handleSubmit}>
            <h1>Comprar producto:</h1>
            <input
                type='text'
                placeholder='Cantidad'
                value={input}
                name='text'
                className='QuantyInput'
                onChange={handleChange}
            />
            <button className='BotonAgregar'>Agregar al carro</button>
        </form>
    );
}

export default ApartadoCompra