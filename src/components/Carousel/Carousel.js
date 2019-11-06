import React, { useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'

const Img = styled.img`
    hieght: 740px;
`


export default function ImageCarousel(props) {
    const { images } = props;

    return (
        <Carousel autoPlay showArrows={false} showThumbs={false}>
            {images.map((image, i) => <Img src={image} key={i}></Img>)}
        </Carousel>
    )
}