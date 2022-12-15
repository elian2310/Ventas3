import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const handleChange = (e) => {
    console.log(e.target.value);
};

const AddProductos = () => {
    const [codigoCuf, setCodigo] = useState([])
    
    useEffect(() => {
        const fetchApiCodigo = async () => {   
            try{
                const res = await axios.get("http://localhost:8800/datosfactura", { params: {
                    codigo: "GHIJK"
                }})
                setCodigo(res.data)
            }catch(err){
                console.log(err)
            }
        };
        fetchApiCodigo();
    }, []);

    return (
        <div>
            <p style={{ fontWeight: "lighter", fontSize: "2em" }}>
            Codigo de Control :{" "}
            <input style={{ fontSize: "0.7em" }} id="control" onChange={handleChange} placeholder={codigoCuf.control} />
            </p>
            <p style={{ fontWeight: "lighter", fontSize: "2em" }}>
            Codigo de Control :{" "}
            <input style={{ fontSize: "0.7em" }} id="control" onChange={handleChange} placeholder={codigoCuf.cuf} />
            </p>
        </div>
    )
}

export default AddProductos