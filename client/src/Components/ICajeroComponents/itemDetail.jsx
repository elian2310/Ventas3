import React from "react"
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
const ItemDetail = ({id, name, qty}) => {

    return(
        <Container>
            <IdTag>ID: {id}</IdTag>
            <NameTag>{name}</NameTag>
            <QtyTag>Qty: {qty}</QtyTag>
            <DelBtn>Del</DelBtn>

        </Container>
    )
}

export default ItemDetail

/*<NameTag>{name}</NameTag>
<QtyTag>{qty}</QtyTag>*/