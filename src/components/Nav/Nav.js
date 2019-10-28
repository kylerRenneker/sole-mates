import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Nav() {

    const List = styled.ul`
        display: flex;
        list-style: none;
    `

    const Navigation = styled.nav`
        position: absolute;
        top: 25px;
        right: 50px;
    `

    return (
        <Navigation>
            <List>
                <li>
                    <Link to='/'>HOME</Link>
                </li>
                <li>
                    <Link to='/about'>ABOUT</Link>
                </li>
                <li>
                    <Link to='/shop'>SHOP</Link>
                </li>
            </List>
        </Navigation>
    )
}
