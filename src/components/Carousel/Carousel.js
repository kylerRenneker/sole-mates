import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import shoe1 from '../../assets/shoeImage1.jpg'
import shoe2 from '../../assets/shoeImage2.jpg'
import shoe3 from '../../assets/shoeImage3.jpg'

export default function ImageCarousel() {
    return (
        <Carousel autoPlay showArrows={false} showThumbs={false}>
            <img src={shoe1} alt></img>
            <img src={shoe2}></img>
            <img src={shoe3}></img>
        </Carousel>
    )
}