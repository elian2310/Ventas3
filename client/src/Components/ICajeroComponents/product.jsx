import styled from "styled-components"
//import sample from '../src/sampleImg/sample.png'
import sample from '../../sampleImg/sample.png'
import React from "react"

const Container = styled.div`
flex:1;
margin: 5px;
min-width: 230px;
height:350px;
align-items: center;
justify-content: center;
background-color: #e5aae6;
/*background: linear-gradient(
    20deg,
    hsl(#e5aae6, 60%,65%),
    hsl(#4d2133,64%,60%)
);*/
display:flex;
position: relative;

    /*&:hover $(Info){
        
    }*/
`
const Circle=styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: #d16fc6;
position: absolute;
`
const Gradient = styled.div`
background: linear-gradient(
    20deg,
    hsl(#e5aae6, 60%,65%),
    hsl(#4d2133,64%,60%)
);
height:100%;
width:100%;
`

const Info = styled.h3`
font-weight: 300;
color: black;
text-align: left;
font-size: 20px;
position: absolute;
justify-content: left;
left: 5px;
bottom: -15px;

`


const Image=styled.img`
    height: 75%;
    z-index:2;
    position:absolute;
    right:25px;
    bottom:25px;
`

const AddBtn = styled.button`
position: absolute;
right: 8px;
bottom: 5px;
height: 40px;
width: 65px;
padding: 0;
cursor: pointer;
&:hover{
    background-color: lightgrey;
}
`


const Product = ({item}) => {
    return (
        <Container>
            <Info>Item Name: {item.name}</Info>
            <Circle>
                <Image src = {sample}/>
            </Circle>  
            <AddBtn>Add</AddBtn>
            <Gradient/>       
        </Container>
    )
}

export default Product
