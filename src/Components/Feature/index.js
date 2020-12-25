import React from 'react';
import {CardWrapper,Card} from './FeatureElemnts';
import {OrderBtn} from '../Navbar/NavbarElements';


 const Feature = ({h1,p,small,BtnText}) => {
    return (
        <Card>
         <h1>{h1}</h1>
         <p>{p}</p>
         <small>{small}</small>
         <OrderBtn>{BtnText}</OrderBtn>
        </Card>    
    )
}

export default Feature;
