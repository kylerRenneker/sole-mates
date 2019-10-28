import React from 'react'
import Nav from '../Nav/Nav'
import Logo from '../../assets/LogoMakr_0Me2oo.png'
import styled from 'styled-components'

export default function Header() {

    const Img = styled.img`
        width: 100px;
        display: flex;
        margin: 20px auto;
    `

    const Header = styled.header`
        height: 100px;    
    `

    return (
        <Header>
            <Img src={Logo} alt='logo'></Img>
            <Nav></Nav>
        </Header>
    )
}