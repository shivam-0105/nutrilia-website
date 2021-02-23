import React from 'react'
import { MenuContainer, MenuH1, MenuH2, MenuWrapper, MenuIcon, MenuP, MenuCard, MenuCart } from './MenuElements'

const Menu = () => {
    return (
        <MenuContainer id='discover'>
            <MenuH1>Menu of the Week</MenuH1>
            <MenuWrapper>
                <MenuCard>
                    <MenuIcon src="/images/noodles.png" />
                    <MenuH2>Noodles</MenuH2>
                    <MenuP>Price : ₹150</MenuP>
                    <MenuCart />
                </MenuCard>
                <MenuCard>
                    <MenuIcon src="/images/sandwich.png" />
                    <MenuH2>Sandwich</MenuH2>
                    <MenuP>Price : ₹350</MenuP>
                    <MenuCart />
                </MenuCard>
                <MenuCard>
                    <MenuIcon src="/images/waffle.png" />
                    <MenuH2>Waffles</MenuH2>
                    <MenuP>Price : ₹100</MenuP>
                    <MenuCart />
                </MenuCard>
                <MenuCard>
                    <MenuIcon src="/images/corn.png" />
                    <MenuH2>Corn Sabji</MenuH2>
                    <MenuP>Price : ₹250</MenuP>
                    <MenuCart />
                </MenuCard>
            </MenuWrapper>
        </MenuContainer>
    )
}

export default Menu
