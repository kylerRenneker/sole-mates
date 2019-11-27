import React from 'react'
import img1 from '../../assets/images/featShoe1.jpg'
import img2 from '../../assets/images/featShoe2.jpg'
import img3 from '../../assets/images/featShoe3.jpg'
import styled from 'styled-components'

const FeatureList = styled.ul`
    display: flex;
`

export default function LandProducts() {

    const renderListItems = (images) => {
        let content = [];

        images.map((image, i) => {
            content.push(
                <img src={image} />
            )
        })

        return content
    }


    return (
        <>
            <h2>
                Handmade products
            </h2>
            <FeatureList>
                {renderListItems([img1, img2, img3])}
            </FeatureList>
        </>
    )
}