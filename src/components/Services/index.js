import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServiceElements'

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Amazing Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src="/images/svg-1.svg" />
                    <ServicesH2>Excellent Food</ServicesH2>
                    <ServicesP>We offer our clients excellent quality services for many years with the best and delicious food</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src="/images/svg-2.svg" />
                    <ServicesH2>Fast Food</ServicesH2>
                    <ServicesP>We offer our clients excellent quality services for many years with the best and delicious food</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src="/images/svg-3.svg" />
                    <ServicesH2>Delivery</ServicesH2>
                    <ServicesP>We offer our clients excellent quality services for many years with the best and delicious food</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
