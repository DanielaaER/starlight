import React from "react";

import SliderHome from "./MainPage/Slider"
import TopHome from "./Top/Top"
import AnnocumentHome from "./Annocument/AnnocumentHome"
import Shop from "./Shops/Shop"
import Wrapper from "./Wrapper/Wrapper"
import PagesReviews from "./Reviews/pageReviews"
import LastReviews from "./Reviews/lastReviews"
import { Container } from "react-bootstrap";



const Home = ({ products }) => {

    return (
        <>
         
            
{/*              <SliderHome />
               <TopHome />
                <AnnocumentHome /> 
                <Wrapper />
                    <PagesReviews />
                <Wrapper />  */}
                <LastReviews /> 

        </>
    )
}

export default Home



