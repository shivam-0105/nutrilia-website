import styled from 'styled-components'
import { FaCartPlus } from 'react-icons/fa'

export const MenuContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

    @media screen and ( max-width: 1000px ) {
        height: 1000px;
    }

    @media screen and (max-width: 768px) {
        height: 1300px;
    }

    @media screen and ( max-width: 578px ) {
        height: 1550px;
    }

    @media screen and ( max-width: 480px ) {
        height: 1650px;
    }

`

export const MenuWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and ( max-width: 1000px ) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and ( max-width: 768px ) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and ( max-width: 578px ) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and ( max-width: 480px ) {
        grid-template-columns: 1fr;
    }
`

export const MenuCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 15px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);

    &:hover {
        transform: scale(1.05);
        transition: all 0.3s linear;
        cursor: pointer;
    }
` 

export const MenuIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const MenuH1 = styled.h1`
    font-size: 2.5rem;
    color: #01bf71;
    margin-bottom: 64px;

    @media screen and (max-width: 1000px) {
        margin-bottom: 48px;
    }

    @media screen and (max-width: 578px) {
        font-size: 1.8rem;
    } 
` 

export const MenuH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const MenuP = styled.p`
    font-size: 1rem;
    text-align: center;
`

export const MenuCart = styled(FaCartPlus)`
    cursor: pointer;
    margin: 20px 0;
    font-size: 1.8rem;
    color: #01bf71;
`