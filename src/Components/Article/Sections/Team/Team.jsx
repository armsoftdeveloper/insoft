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
        <section className="team">
            <Typography className="title-top">{data.article[0].team[0].topTitle}</Typography>
            <Typography className="title-bottom">{data.article[0].team[0].bottomTitle}</Typography>
            <Box className="inner-team mt-5">
            {data.article[0].team.map((items,index)=>{
                return (
                        <Box key={index} className="d-flex flex-wrap align-items-center justify-content-center gap-5">
                            <Box className="team-col">
                                <img src={items.team.images[0]} alt="Team People"/>
                                <Box className="inner-typography">
                                    <Typography className="team-name">{items.team.names[0]}</Typography>
                                    <Typography className="team-proffession">{items.team.proffession[0]}</Typography>
                                </Box>
                            </Box>
                            <Box className="team-col">
                                <img src={items.team.images[1]} alt="Team People"/>
                                <Box className="inner-typography">
                                    <Typography className="team-name">{items.team.names[1]}</Typography>
                                    <Typography className="team-proffession">{items.team.proffession[1]}</Typography>
                                </Box>
                            </Box>
                            <Box className="team-col">
                                <img src={items.team.images[2]} alt="Team People"/>
                                <Box className="inner-typography">
                                    <Typography className="team-name">{items.team.names[2]}</Typography>
                                    <Typography className="team-proffession">{items.team.proffession[2]}</Typography>
                                </Box>
                            </Box>
                            <Box className="team-col">
                                <img src={items.team.images[3]} alt="Team People"/>
                                <Box className="inner-typography">
                                    <Typography className="team-name">{items.team.names[3]}</Typography>
                                    <Typography className="team-proffession">{items.team.proffession[3]}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    )
                })}
            </Box>
        </section>
    )
}