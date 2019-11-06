import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Nav() {

    const List = styled.ul`
        display: flex;
        list-style: none;
        font-size: 1.4rem;
        margin-right: 30px;
    `

    const Navigation = styled.nav`
        position: absolute;
        top: 50px;
        right: 0;
    `

    const LinkItem = styled.li`
        margin-right: 26px;
    
    `

    const StyledLink = styled(Link)`
        text-decoration: none;
    `

    return (
        <Navigation>
            <List>
                <LinkItem>
                    <StyledLink to='/'>HOME</StyledLink>
                </LinkItem>
                <LinkItem>
                    <StyledLink to='/about'>ABOUT</StyledLink>
                </LinkItem>
                <LinkItem>
                    <StyledLink to='/shop'>SHOP</StyledLink>
                </LinkItem>
            </List>
        </Navigation>
    )
}
