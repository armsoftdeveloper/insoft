import React from "react";
/***** Style *****/
import "./_style.scss";
/***** Components *****/
import Newsletter from "./_Files/Newsletter";
import Contact from "./_Files/Contact";
import FooterBottom from "./_Files/FooterBottom";
export default function Footer(){
    return(
        <footer id="contact">
            <Newsletter/>
            <Contact/>
            <FooterBottom/>
        </footer>
    )
}