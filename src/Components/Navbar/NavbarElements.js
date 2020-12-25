import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {FaTimes,FaBars} from 'react-icons/fa'
export const transition = '0.3s ease-out';

export const NavbarConatiner = styled.nav`
width:100%;
height:120px;
background:#fff;
box-shadow:2px 2px 8px rgba(0,0,0,0.345);
display:flex;
justify-content:space-evenly;
align-items:center;

@media(max-width:400px){
    height:80px;
    justify-content:space-between;
}
`;

export const Hamburger = styled(FaBars)`
color: #000;
display:none;
width:44px;
font-size:26px;
color:gray;
cursor:pointer;
@media(max-width:450px){
    display:block;
    
}
`

export const Logo = styled.div`
 width:100px;
 height:80px;

 @media(max-width:400px){
    height:60px;
    width:60px;
}
`;

export const LogoImg = styled.img`
width:100%;
`;

export const NavUl = styled.ul`
display:flex;
align-items:center;
justify-content:space-between;
transition:${transition};
@media(max-width:400px){
    flex-direction:column;
    background:#fff;
    position:fixed;
    top:${({isOpen})=>(isOpen ? '0' : '-350px')};
    left:0;
    width:100%;
    height:300px;
    padding:0.8rem 0;
}
`;

export const NavLi = styled.li`
 list-style:none;
`;
export const NavLink = styled(Link)`
 text-decoration:none;
 font-size:18px;
 color:#000;
 font-weight:bold;
 padding:0 2rem;
 &:hover{
     color:#ffc500;
 }
`;

export const OrderBtn = styled.button`
background:#ffc500;
padding:0.6rem 1.2rem;
border-radius:10px;
cursor:pointer;
color:#fff;
font-size:18px;
font-weight:bold;
border:none;
outline:none;
transition:${transition};
&:hover{
    background:#e31837;
    transition:${transition};
}
`;

 export const CloseIcon = styled(FaTimes)`
 display:none;
 font-size:26px;
 position:absolute;
 right:12px;
 top:8px;
 color:gray;
 cursor:pointer;
 @media(max-width:400px){
     display:block;
 }
`;