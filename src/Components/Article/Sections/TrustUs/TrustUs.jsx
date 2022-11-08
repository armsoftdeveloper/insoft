import React from "react";
/***** Style *****/
import "./_style.scss";
/***** MUI *****/
import Box from '@mui/material/Box';
/***** Redux Hooks *****/
import { useSelector } from "react-redux";
/***** Components *****/
import BackgroundImage from "./BackgroundImage";
import Typographys from "./Typographys";
export default function ChooseUs(){
    const data = useSelector((state) => state)
    return(
        <section className="why-trust-us container">
            <Box className="inner-why-trust-us">
                <Typographys/>
                <BackgroundImage/>
            </Box>
        </section>
    )
}