import React from 'react'
import styled from 'styled-components'
import { ContentWrapper } from '../ContentWrapper/ContentWrapper'

const MessageContainer = styled(ContentWrapper)`
    display: flex;
    margin-top: 80px;
    margin-bottom: 100px;
`
const MessageHeader = styled.h3`
    font-weight: 400;
    font-family: "Amatic SC", Sans-Serif;
    margin: 19px 0px;
    margin-right: 100px; 
    font-size: 3.8rem;
    width: 50%;
`

const Message = styled.p`
    width: 50%;
    font-size: 1.8rem;
    line-height: 3rem;
    font-weight: 500;
`

export default function LandMessage() {
    return (
        <MessageContainer>
            <MessageHeader>Our leather comes from barks that are kept appropriate to the species and is vegetable-tanned.</MessageHeader>
            <Message>THANN stands for straightforward, functional products that we manufacture by hand from genuine
                bioleathers. We buy cattle skins directly from small German organic farms and leave them
                vegetable tanning. Each article is produced from the first to the last step in our workshop
                in Regensburg / Bavaria. The result is sustainable products that accompany you for a lifetime.
            </Message>
        </MessageContainer>
    )
}