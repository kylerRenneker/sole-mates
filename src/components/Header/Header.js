import React from 'react'
import Nav from '../Nav/Nav'
import Logo from '../../assets/images/LogoMakr_0Me2oo.png'
import styled from 'styled-components'

export default function Header() {

    const Header = styled.header`
        max-width: 1440px;
        margin: auto;
        position: relative;
        padding-top: 30px; 
        padding-bottom: 30px;         
    `

    const Logo = styled.h1`
        font-family: 'Amatic SC', cursive;
        text-align: center;   
        font-size: 5rem;
        margin: 0;
    `

    return (
        <Header>
            <Logo>Sole Mates</Logo>
            <Nav></Nav>
        </Header>
    )
}