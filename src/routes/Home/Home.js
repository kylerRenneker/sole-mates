import React from 'react'
import styled from 'styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from '../../components/Carousel/Carousel'
import LandMessage from '../../components/LandMessage/LandMessage'
import LandProducts from '../../components/LandProducts/LandProducts'
import LandProductStory from '../../components/LandProductStory/LandProductStory'
import SocialFooter from '../../components/SocialFooter/SocialFooter'
import shoe1 from '../../assets/shoeImage1.jpg'
import shoe2 from '../../assets/shoeImage2.jpg'
import shoe3 from '../../assets/shoeImage3.jpg'

const Main = styled.main`
    max-width: 1440px;
    margin: auto;
`

export default function Home() {

    return (
        <Main>
            <Carousel images={[shoe1, shoe2, shoe3]} />
            <LandMessage />
            <LandProducts />
            <LandProductStory />
            <SocialFooter />
        </Main>
    )
}
