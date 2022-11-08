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
        <section className="why-choose-us container">
            <Box className="inner-why-choose-us">
                <BackgroundImage/>
                <Typographys/>
            </Box>
        </section>
    )
}