import styled from "styled-components"
import React from "react"

const Container = styled.div`
    //margin-top: 20px;
    background-color: #ffc7fc;
    position: relative;
    height: 50px;
`
const Title = styled.h1`
    color: grey;
    font-size: 30px;
    text-align: center;
    position: center;
`

const Header = () => {
    return (
        <Container>
            <Title>Interfaz Cajero</Title>
        </Container>
    )
}

export default Header