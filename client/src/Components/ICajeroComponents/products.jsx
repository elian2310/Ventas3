import Product from "./product"
import styled from "styled-components"
import { products } from "./data"
import React from "react"

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
    height: 300px;
    
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

const Products = () => {
    return (
        <Container>
            
            <Prods>
            {products.map(item=>(
                <Product item={item} key = {item.id}/>
            ))}
            </Prods>
            <RightSide>
                <Input type="text" placeholder="Item ID"/>
                <NumPad>
                    {[1,2,3,4,5,6,7,8,9,0].map(val=>(
                        <NumBtn>{val}</NumBtn>
                    ))}

                </NumPad>
            </RightSide>
        </Container>
    )
}

export default Products

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