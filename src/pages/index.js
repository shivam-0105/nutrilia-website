import React, { useState } from 'react'
import HomeSection from '../components/HomeSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data'
import Services from '../components/Services';
import Menu from '../components/MenuSection';
import Footer from '../components/Footer';

const Home = () => {

    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HomeSection />
            <InfoSection {...homeObjOne}/>
            <Services />
            <Menu />
            <InfoSection {...homeObjTwo} />
            <Footer />
        </div>
    )
}

export default Home
