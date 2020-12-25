import styled from 'styled-components';
import {transition} from '../Navbar/NavbarElements';
import ImgBg from '../../img/mcdbg1.jpg'
export const HeroContainer = styled.div`
width:100%;
margin-top:4rem;
height:auto;
padding:2rem 0;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;

export const HeroWrapper = styled.div`
width:85%;
border-radius:10px;
height:100%;
background:url(${ImgBg});
display:flex;
align-items:center;
justify-content:flex-start;
padding:2rem 0;
@media(max-width:450px){
    width:100%;
   background:none;
}
`;

export const Herocard = styled.div`
width:400px;
background:#fff;
height:400px;
padding:1.5rem;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:center;
margin-left:40px;
border-radius:10px;
@media(max-width:450px){
    width:100%;
    height:100%;
    margin-left:0;
}

h1{
    font-size:2.6rem;
    color:gray;
    line-height:1;
}
p{
    color:#ccc;
    font-size:15px;
    padding:1rem 0;
}
small{
    font-size:12px;
    color:#ccc;
    padding:1rem 0;
}
`;

export const HeroSection = styled.div`
width:85%;
height:390px;
margin-top:5rem;
display:flex;
align-items:center;
justify-content:space-evenly;

img{
  width:60%;
  height:100%;  
}
@media(max-width:450px){
flex-direction:column;
height:auto;

img{
    width:100%;
}
}
`;
