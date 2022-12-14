import React, { useState } from "react";
/***** Style *****/
import "./_style.scss";
/***** MUI *****/
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
/***** Redux Hooks *****/
import { useSelector } from "react-redux";
export default function Team(){
    const data = useSelector((state) => state)
    return(
        <section className="customers" id="customers">
            <Typography className="title-top">{data.article[0].customers[0].typography[0]}</Typography>
            <Typography className="title-bottom">{data.article[0].customers[0].typography[0]}</Typography>
            <Box className="inner-customers mt-5">
            {data.article[0].customers[0].images.map((items,index)=>{
                return (
                        <Box key={index}>
                            <Box className="customers-col">
                                <img src={items} alt="Team People"/>
                            </Box>
                        </Box>
                    )
                })}
            </Box>
        </section>
    )
}