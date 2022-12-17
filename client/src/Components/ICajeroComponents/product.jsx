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
//Product receives item, ar(list of lists), parentFunction(update for ar), jas(list of jsons) and parentAddJS(update for js)
const Product = ({item, ar, parentFuntion, js, parentAddJS, parentQtyAr, parentQtyJs, inc, ind}) => {
    

    const handleClick = (it) =>{
        //form list and json to add to their respective lists
        let toAdd = [it.id, it.name, 1];
        let toAddJs = {"id":it.id, "name":it.name, "qty":1};
        //console.log("To Add JS: " + JSON.stringify(toAddJs));
        //See if toAdd is already in the list
        //let includes = ar.some(a=>toAdd.every((v,i) => v === a[i]));
        let included = inc(item.id, ar);
        if(!included){   
            //If it is not, we will add them to the lists
            //console.log("Adding to lists");
            parentAddJS(toAddJs);      
            parentFuntion(toAdd);          
        }
        else
        {
            //If it is already in it, we will add them
            let indexInDetails = ind(item.id,js);
            /*console.log("Index in details: " + indexInDetails);
            console.log("Id to search in details: " + item.id);
            ar.forEach(element => {
              console.log(element);  
            });*/
            parentQtyAr(indexInDetails);
            parentQtyJs(indexInDetails);
        }
        
    }

    return (
        <Container>
            <Info>Item Name: {item.name}</Info>
            <Circle>
                <Image src = {sample}/>
            </Circle>  
            <AddBtn onClick={() => {handleClick(item)}}>Add</AddBtn>
            <Gradient/>       
        </Container>
    )
}

export default Product
