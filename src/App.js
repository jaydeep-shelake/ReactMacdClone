import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Navbar from './Components/Navbar/index';
import Hero from './Components/Hero/index';
import Feature from './Components/Feature/index';
import {CardWrapper} from './Components/Feature/FeatureElemnts'
import Footer from './Components/Footer/index'
const state = [
  {
      h1:"Contactless Mobile Order & Pay",
      p:'Pick up your order. Select Drive Thru pick up and share your order code at the speaker. Don’t forget to add your free daily holiday deal',
      small:'McD App download and registration required. Mobile Order & Pay available at participating McDonald',
      btnText:'Use App to order'
  },  
  {
      h1:"McCafé® Rewards",
      p:'Download our App to earn rewards and access deals on McCafé drinks while you’re getting your free daily deal for the holidays.',
      small:'Valid thru 12/27/20 at participating McDonald’s. McD App download and registration required.',
      btnText:' Earn Reward'
  },  
  {
      h1:"Join Our Email List",
      p:'Get news, promotions and more delivered right to your inbox—you could have already known about our holiday deals.',
      btnText:'Signup'
  },  
];


const App=()=>{

    return (
      <Router>
        <GlobalStyle/>
         <Navbar/>
         <Hero/>
         <CardWrapper>
           {state.map(card=><Feature h1={card.h1} p={card.p} small={card.small} BtnText={card.btnText}/>)}
         </CardWrapper>
         <Footer/>
      </Router>
    );
}


export default App;
