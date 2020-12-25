import React from 'react';
import {HeroContainer,HeroWrapper,Herocard,HeroSection} from './HeroElements';
import {OrderBtn} from '../Navbar/NavbarElements';
import cardImg from '../../img/orderimg.jpg'
const Hero = () => {
    return (
        <HeroContainer>
            <HeroWrapper>
                   <Herocard>
                   <h1>Contactless Moblie Order & pay</h1>
                   <p>Mobile Order & Pay is a great call, with exclusive deals on all your favorites, 
                    plus Drive Thru and curbside pickup.*</p>
                    <OrderBtn>Use the App</OrderBtn>
                   <small>*McD App download and registration required. Mobile Order & Pay available at participating McDonald's.</small>
                   </Herocard>
            </HeroWrapper>
            <HeroSection>
                <img src={cardImg} alt="order-image"/>
                <Herocard>
                    <h1>Order McDelivery® Now*</h1>
                    <p>Get all your McDonald’s favorites delivered right to your 
                    doorstep with McDelivery® on Uber Eats or DoorDash.</p>
                    <small>*At partici
                     pating McDonald’s. Prices may be higher than at restaurants. Delivery/service fees apply.</small>
                     <OrderBtn>Order McDelivery® Now</OrderBtn>
                </Herocard>
            </HeroSection>
        </HeroContainer>
    )
}

export default Hero;
