import React from "react";
/***** Style *****/
import "./_style.scss";
/***** Components *****/
import ItSolution from "./Sections/ItSolution/ItSolution";
import Company from "./Sections/Company/Company";
import ChooseUs from "./Sections/ChooseUs/ChooseUs";
import TrustUs from "./Sections/TrustUs/TrustUs";
import Counter from "./Sections/Counter/Counter";
import Slider from "./Sections/SwiperSlider/Slider";
import Team from "./Sections/Team/Team";
import Customers from "./Sections/Customers/Customers";
export default function Article(){
    return(
        <article>
            <ItSolution/>
            <Company/>
            <ChooseUs/>
            <TrustUs/>
            <Counter/>
            <Slider/>
            <Team/>
            <Customers/>
        </article>
    )
}