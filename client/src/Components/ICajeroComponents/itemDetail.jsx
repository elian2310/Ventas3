import React from "react"
import { json } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
background-color: black;
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 5px;
height: 100%;
//position: relative;
`
const DelBtn = styled.button`
    
    border-radius: 5px;
    //text-align: center;
    //padding: 5px;
    position: relative;
    //right: 10px;

    &:hover{
        background-color: lightgray;
    }
    cursor: pointer;
`

const IdTag = styled.span`
    font-weight: 300;
    text-align: center;
    //background-color: grey;
    position: relative;
    left: 10px;
    top: 20px;
    //padding-left: 0px;
`

const NameTag = styled.h3`
    font-weight: 300;
    text-align: center;
    //background-color: grey;
    position: relative;
    left: -10px;
`

const QtyTag = styled.h3`
    font-weight: 300;
    text-align: center;
    //background-color: grey;
    position: relative;
    left: -10px;
`

//receives the id, name and quantity
const ItemDetail = ({id, name, qty, parentRmv, ar, js}) => {

    function myIndexOfAr(o, arr) {    
        for (var i = 0; i < arr.length; i++) {
            if (arr[i][0] == o[0] && arr[i][1] == o[1]) {
                return i;
            }
        }
        return -1;
    }

    const handleClickRmv = (id, name) =>{
        let toRmv = [id, name];
        let index = myIndexOfAr(toRmv, ar);
        console.log("Index: " + index);
        if(index>-1)//Item Exists in list
        {
            //if ar contains the element, remove it
            //console.log("Found Element with index: " + index);
            ar.splice(index,1);
            parentRmv(id);
        }
        //console.log(ar);
    }
    return(
        <Container>
            <IdTag>ID: {id}</IdTag>
            <NameTag>{name}</NameTag>
            <QtyTag>Qty: {qty}</QtyTag>
            <DelBtn onClick={() => {handleClickRmv(id, name)}}>Del</DelBtn>

        </Container>
    )
}

export default ItemDetail

/*<NameTag>{name}</NameTag>
<QtyTag>{qty}</QtyTag>*/