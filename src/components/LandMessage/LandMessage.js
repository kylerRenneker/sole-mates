import React from 'react'
import styled from 'styled-components'
import { ContentWrapper } from '../ContentWrapper/ContentWrapper'

const MessageContainer = styled(ContentWrapper)`
    display: flex;
`
const MessageHeader = styled.h3`
    font-weight: 400;
    font-family: "Sabon-Pro", serif;
    margin: 19px 0px;
    margin-right: 100px; 
    padding-right: 100px;
`

export default function LandMessage() {
    return (
        <MessageContainer>
            <MessageHeader>Our leather comes from barks that are kept appropriate to the species and is vegetable-tanned.</MessageHeader>
            <p>THANN stands for straightforward, functional products that we manufacture by hand from genuine
                bioleathers. We buy cattle skins directly from small German organic farms and leave them
                vegetable tanning. Each article is produced from the first to the last step in our workshop
                in Regensburg / Bavaria. The result is sustainable products that accompany you for a lifetime.
            </p>
        </MessageContainer>
    )
}