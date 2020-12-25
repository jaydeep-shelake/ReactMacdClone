import React ,{useState} from 'react';
import {NavbarConatiner,Logo,LogoImg,NavUl,NavLi,NavLink,OrderBtn,Hamburger,CloseIcon} from './NavbarElements';

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);
    const toggle =()=>{
        setIsOpen(!isOpen);
    }
    return (
        <NavbarConatiner>
            <Logo>
              <LogoImg src="https://www.mcdonalds.com/content/dam/usa/nfl/assets/nav/arches-logo_108x108.jpg" alt="mcd-logo"/>  
            </Logo>
            <NavUl isOpen={isOpen} >
                <NavLi><NavLink to="/">Our Menu</NavLink></NavLi>
                <NavLi><NavLink to="/">MacCafè</NavLink></NavLi>
                <NavLi><NavLink to="/">About our Food</NavLink></NavLi>
                <NavLi><NavLink to="/">Deals and App</NavLink></NavLi>
                <NavLi><NavLink to="/">Trending</NavLink></NavLi>
                <OrderBtn>Order Now</OrderBtn>
                <CloseIcon onClick={toggle}/>
            </NavUl>
            <Hamburger onClick={toggle}/>
        </NavbarConatiner>
    )
}

export default Navbar;
