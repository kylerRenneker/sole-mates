import React from 'react'
import Nav from '../Nav/Nav'
import Logo from '../../assets/LogoMakr_0Me2oo.png'
import styled from 'styled-components'

export default function Header() {

    const Header = styled.header`
            
    `

    const Logo = styled.h1`
        font-family: 'Amatic SC', cursive;
        text-align: center;   
    `

    return (
        <Header>
            <Logo>Sole Mates</Logo>
            <Nav></Nav>
        </Header>
    )
}