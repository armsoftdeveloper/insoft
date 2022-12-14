import React from "react";
/***** MUI *****/
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/***** Redux Hooks *****/
import { useSelector } from "react-redux";
export default function Newsletter(){
    const data = useSelector((state) => state)
    return(
        <Box className="inner-newsletter">
            <Box className="typography">
                <Typography className="top-title">{data.footer[0].newsletter[0].titleTop}</Typography>
                <Typography className="bottom-title">{data.footer[0].newsletter[0].titleBottom}</Typography>
            </Box>
            <Box className="handling-control">
                <Box className="input-col">
                    <input className="form-control"/>
                </Box>
                <Button className="subscribe-button">Subscribe Now</Button>
            </Box>
        </Box>
    )
}