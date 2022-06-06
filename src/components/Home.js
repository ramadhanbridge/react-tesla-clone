import React from 'react'
import styled from 'styled-components'
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Toucheless Delivery"
                backgroundImg="/images/model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            ></Section>
            <Section
                title="Model Y"
                description="Order Online for Toucheless Delivery"
                backgroundImg="/images/model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            ></Section>
            <Section
                title="Model 3"
                description="Order Online for Toucheless Delivery"
                backgroundImg="/images/model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            ></Section>
            <Section
                title="Model X"
                description="Order Online for Toucheless Delivery"
                backgroundImg="/images/model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            ></Section>
            <Section
                title="Lower Cost Solar Panels in America"
                description="Order Online for Toucheless Delivery"
                backgroundImg="/images/solar-panel.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            ></Section>
            <Section
                title="Solar for New Roofs"
                description="Order Online for Toucheless Delivery"
                backgroundImg="/images/solar-roof.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            ></Section>

        </Container>
    )
}

const Container = styled.div`
  height: 100vh;
`;

export default Home
