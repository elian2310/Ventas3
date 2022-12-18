import Product from "./product"
import styled from "styled-components"
// import { products } from "./data"
import React from "react"
import ItemDetail from "./itemDetail"
import { useState } from "react"
import { useEffect } from "react";
import axios from "axios";
import https from "https";


const Container = styled.div`
    padding: 20px;
    display:flex;
    
`

const Prods = styled.div`
    display:flex;
    padding: 20px;
    flex:3;
    flex-wrap:wrap;
    justify-content: space-between;
`
const NumPad = styled.div`
    display:flex;
    padding:5px;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: white;
    margin: 5px;
//flex-direction: row;
`


const RightSide = styled.div`
    padding: 20px;
    display:flex;
    flex-direction: column; 
    right: 0px;
    flex: 1;
    background-color: #a608ab;
    position: relative;
    height:100%;
    //overflow: "hidden";
    
`
const Input = styled.input`
//width: 50px;
height: 20px;
font-size:18px;
padding:10px;
//margin:10px;
background-color: black;
color:white;
border: none;
border-radius:3px;
::placeholder{
    color:white;
}
margin:10px;
`


const NumBtn =styled.button`
//position: absolute;
right: 8px;
bottom: 5px;
height: 50px;
width: 100px;
cursor: pointer;
//flex: 3;
border-radius: 3px;
&:hover{
    background-color: lightgray;
}
`
const Details=styled.h2`
//background-color: red;
text-align:left;
color: white;
`
const DetailContainer = styled.div`
//background-color: white;
display:flex;
flex-direction: column;

`


export default function Products({childToParent}) {


    const [products, setDataCuf] = useState([])

    useEffect(() => {
        getCUFWithFetch();
    }, []);

    const getCUFWithFetch = async () => {
        /* const agent = new https.Agent({  
            rejectUnauthorized: false
          });*/
        const response = await axios.get("http://localhost:8800/getProductos");
        
        setDataCuf(response.data);
    };
    console.log(products)

    function includes(CodigoQR, arr)
    {
        for(var i = 0; i<arr.length; i++)
        {
            //console.log("At index: " + i + ", id value is: " + arr[i][0]);
            if(arr[i][0]===CodigoQR){
                return true;
            }
        }
        return false;

    }

    function myIndexOfAr(CodigoQR, arr) {    
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].CodigoQR === CodigoQR) {

                return i;
            }
        }
        return -1;
    }

    //useState List Variables, jsAr is a list of Jsons, and ar2 a List of Lists
    const[jsAr,updateJS] = useState([]);
    const[ar2, update] = useState([]);

    //Update Function for ar2
    const parentFunction = (ar)=>{
        update((prev)=> [
            ...prev, 
            ar
        ]);
    }
    //Update Function for jsAr
    const parentAdJS = (tA)=>{
        updateJS((pre)=> [
            ...pre,
            tA
        ]);
        childToParent(jsAr);
    }
    
    //Rmv Function for jsAr
    const parentRmvJs = (toRmv)=>{
        updateJS((current)=>
            current.filter((item)=>item.CodigoQR !== toRmv));

        childToParent(jsAr);
    }
    
    //Update Qty jsAr
    const parentQtyJs = (index)=>{
        jsAr[index].qty++;
        
        updateJS((pre)=> [
            ...pre
        ]);
        childToParent(jsAr);
        //updateJS(jsAr);

        /*jsAr.forEach(element => {
            console.log(JSON.stringify(element));
        });*/
    }

    //Update Qty listAr
    const parentQtyAr = (index)=>{
        ar2[index][2]++;
        update(ar2);
    }

    const handleClickNum = (num) =>{
        if(num === 'Del'){
            //If Del Btn was clicked, slice last value of the string 
            let aux = document.getElementById("input").value;
            aux = aux.slice(0,-1);
            document.getElementById("input").value = aux;
        }
        else if(num==='Add'){
            let toSearch = document.getElementById("input").value;
            if(document.getElementById("input").value.length > 0)
            {
                let indexFound = myIndexOfAr(toSearch, products);
                if(indexFound > -1)
                {
                    let toAddAr = [products[indexFound].CodigoQR, products[indexFound].NombreProducto, 1, products[indexFound].Precio];
                    let toAddJS = {"CodigoQR":products[indexFound].CodigoQR, "NombreProducto":products[indexFound].NombreProducto, "qty":1, "Precio":products[indexFound].Precio};
                    //let includes = ar2.some(a=>toAddAr.every((v,i) => v === a[i]));
                    let included = includes(products[indexFound].CodigoQR, ar2);
                    //console.log("Element: " + products[indexFound].id + " is: " + included);
                    if(!included)
                    {
                        //If it isnt in lists, we will add it
                        parentFunction(toAddAr);
                        parentAdJS(toAddJS);
                        document.getElementById("input").value = '';
                    }
                    else
                    {
                        let indexInDetails = myIndexOfAr(products[indexFound].CodigoQR,jsAr)
                        //If it is already in it, we will update the qty
                        //console.log("Changing Qty");
                        parentQtyAr(indexInDetails);
                        parentQtyJs(indexInDetails);
                        document.getElementById("input").value = '';
                    }
                }
            }
            
            
        }
        else{
            //else, just add the number to string
            document.getElementById("input").value += (num);
        }
        childToParent(jsAr);
        
    }

    return (
        <Container>
            
            <Prods>
            {products.map(item=>(
                <Product item={item} ar={ar2} parentFuntion={parentFunction} js={jsAr} parentAddJS = {parentAdJS} parentQtyAr={parentQtyAr} parentQtyJs={parentQtyJs} inc={includes} ind={myIndexOfAr} key = {item.CodigoQR}/>
            ))}
            </Prods>
            <RightSide>
                <Input id = "input" type="text" placeholder="Item ID"/>
                <NumPad>
                    {[1,2,3,4,5,6,7,8,9,0, 'Add', 'Del'].map(val=>(
                        <NumBtn onClick={() => {handleClickNum(val)}} key = {val}>{val}</NumBtn>
                    ))}

                </NumPad>

                <DetailContainer id="detailsCon">
                    <Details id="details" >Detalles:</Details>

                    {jsAr.map(v=>(
                        <ItemDetail id={v.CodigoQR} name={v.NombreProducto} qty={v.qty} ar={ar2} parentRmv ={parentRmvJs} key={v.CodigoQR}/>
                    ))}

                </DetailContainer>
                
            </RightSide>
        </Container>
    )
}




/*{window.arr.map(v=>(
    <ItemDetail id={v[0]} name={v[1]} qty={1}/>
))}*/
/*{[1,2,3,4,5,6,7,8,9,0].map(value=>(
                        <NumBtn {value} />
                    ))}*/
