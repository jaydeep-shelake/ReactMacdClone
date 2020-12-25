import styled from 'styled-components';

 export const FooterContainer = styled.footer`
 width:100%;
 height:auto;
 padding:2rem 0;
 border-top:1px solid gray;
 display:flex;
 align-items:center;
 justify-content:center;
 margin-top:4rem;
`;
export const FooterElements = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 width:80%;
 p{
     color:gray;
     margin:4px 0;
 }
 small{
     color:#333;
     margin-top:10px;
 }
 @media(max-width:450px){
     text-align:center;
 }
`