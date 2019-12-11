import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'

export default function Nav() {
    let history = useHistory()

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
        font-family: 'YanoneKaffeesatz';
        font-size: 2.4rem;
        text-decoration: none;
        color: ${p => history.location.pathname === p.to ? '#176ca9' : '#444444'};
        &:hover {
            color: #176ca9;
        }
        
    `

    const ShopLink = styled(StyledLink)`
        border: 1px solid #444444;
        padding: 10px 20px;
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
                    <ShopLink to='/shop'>SHOP</ShopLink>
                </LinkItem>
            </List>
        </Navigation>
    )
}
