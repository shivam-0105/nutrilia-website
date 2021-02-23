import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'
import { HomeContainer, HomeBg, VideoBg, HomeContent, HomeH1, HomeP, HomeBtnWrapper, ArrowForward, ArrowRight } from './HomeElements'

const HomeSection = () => {

    const [ hover , setHover ] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HomeContainer id="home">
            <HomeBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HomeBg>
            <HomeContent>
                <HomeH1>Try the best food of the week</HomeH1>
                <HomeP>
                    Dishes that you crave, offers that you'll love!
                    <br />
                    Upto 50% off*
                </HomeP> 
                <HomeBtnWrapper>
                    <Button to='discover' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        Get started { hover ? <ArrowForward /> : <ArrowRight /> }
                    </Button>
                </HomeBtnWrapper>
            </HomeContent>
        </HomeContainer>
    )
}

export default HomeSection
