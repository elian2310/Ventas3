import Product from "./product"
import styled from "styled-components"
import { products } from "./data"
import React from "react"
import ItemDetail from "./itemDetail"
import { useState } from "react"


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


const Products = () => {

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
    }
    
    //Rmv Function for jsAr
    const parentRmvJs = (toRmv)=>{
        updateJS((current)=>
            current.filter((item)=>item.id !== toRmv));
    }
    
    const handleClickNum = (num) =>{
        if(num === 'Del'){
            //If Del Btn was clicked, slice last value of the string 
            let aux = document.getElementById("input").value;
            aux = aux.slice(0,-1);
            document.getElementById("input").value = aux;
            }
        else{
            //else, just add the number to string
            document.getElementById("input").value += (num);}
    }

    return (
        <Container>
            
            <Prods>
            {products.map(item=>(
                <Product item={item} ar={ar2} parentFuntion={parentFunction} js={jsAr} parentAddJS = {parentAdJS} key = {item.id}/>
            ))}
            </Prods>
            <RightSide>
                <Input id = "input" type="text" placeholder="Item ID"/>
                <NumPad>
                    {[1,2,3,4,5,6,7,8,9,0, 'Del'].map(val=>(
                        <NumBtn onClick={() => {handleClickNum(val)}} key = {val}>{val}</NumBtn>
                    ))}

                </NumPad>

                <DetailContainer id="detailsCon">
                    <Details id="details" >Detalles:</Details>

                    {jsAr.map(v=>(
                        <ItemDetail id={v.id} name={v.name} qty={1} ar={ar2} parentRmv ={parentRmvJs} key={v.id}/>
                    ))}

                </DetailContainer>
                
            </RightSide>
        </Container>
    )
}


export default Products

/*{window.arr.map(v=>(
    <ItemDetail id={v[0]} name={v[1]} qty={1}/>
))}*/
/*{[1,2,3,4,5,6,7,8,9,0].map(value=>(
                        <NumBtn {value} />
                    ))}*/

/*<NumPad>
<NumBtn>1</NumBtn>
<NumBtn>2</NumBtn>
<NumBtn>3</NumBtn>

<NumBtn>4</NumBtn>
<NumBtn>5</NumBtn>
<NumBtn>6</NumBtn>

<NumBtn>7</NumBtn>
<NumBtn>8</NumBtn>
<NumBtn>9</NumBtn>

<NumBtn>0</NumBtn>
</NumPad>*/