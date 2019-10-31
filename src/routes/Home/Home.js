import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from '../../components/Carousel/Carousel'
import LandMessage from '../../components/LandMessage/LandMessage'
import LandProducts from '../../components/LandProducts/LandProducts'
import LandProductStory from '../../components/LandProductStory/LandProductStory'
import SocialFooter from '../../components/SocialFooter/SocialFooter'

export default function Home() {

    return (
        <main>
            <Carousel />
            <LandMessage />
            <LandProducts />
            <LandProductStory />
            <SocialFooter />
        </main>
    )
}
