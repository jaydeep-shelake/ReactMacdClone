import styled from 'styled-components';

export const CardWrapper = styled.div`
width:100%;
height:400px;
padding:4rem 0;
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:space-evenly;
@media(max-width:450px){
    justify-content:center;
    height:auto;
}
`;

export const Card = styled.div`
width:350px;
height:330px;
padding:1.5rem 1rem;
margin:0 20px;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:flex-start;
h1{
    font-size:2.6rem;
    color:gray;
    line-height:1;
    color:black;
}
p{
    color:#ccc;
    font-size:15px;
    padding:1rem 0;
    color:#333;
}
small{
    font-size:12px;
    color:#ccc;
    padding:1rem 0;
}

@media(max-width:450px){
    height:auto;
    width:100%;
    margin-top:15px;
}
`;