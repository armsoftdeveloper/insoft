import React from "react";
/***** Style *****/
import "../Main/_style.scss";
/***** MUI *****/
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Image from "../../Assets/Images/Header/download.png";
/***** Hooks *****/
import { useSelector } from "react-redux";
export default function Main(){
    const data = useSelector((state)=>state);
    return(
        <main className="container-fluid col-12">
            <Box className="inner-main container">
                <Box className="typography">
                    {data.main.map((items,index)=>{
                        return(
                            <Box className="inner-typography">
                                <Typography className="about-us-title" key={index}>
                                    {items.title}
                                </Typography>
                                <Typography className="about-us-text col-10" key={index}>
                                    {items.text}
                                </Typography>
                            </Box>
                            )
                        })}
                    <Stack direction="row" className="btn-group">
                        <Button>about us</Button>
                        <Button>contact us</Button>
                    </Stack>
                </Box>
                <Box className="image-container container">
                    <img src={Image} alt="About IT" className="img-fluid"/>
                </Box>
            </Box>
        </main>
    )
}