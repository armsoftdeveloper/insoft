import React from "react";
/***** Style *****/
import "./_style.scss";
/***** Components *****/
import Newsletter from "./Newsletter";
import Contact from "./Contact";
import FooterBottom from "./FooterBottom";
export default function Footer(){
    return(
        <footer id="contact">
            <Newsletter/>
            <Contact/>
            <FooterBottom/>
        </footer>
    )
}