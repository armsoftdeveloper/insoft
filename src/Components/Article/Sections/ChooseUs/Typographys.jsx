import React from "react";
/***** MUI *****/
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
/***** Redux Hooks *****/
import { useSelector } from "react-redux";
export default function Typographys(){
    const data = useSelector((state)=>state)
    return(
        <Box className="typographys-container">
            <Typography className="title-top">{data.article[0].chooseUs[0].title}</Typography>
            <Typography className="title-bottom">{data.article[0].chooseUs[0].titleBottom}</Typography>
            <Typography className="typography">{data.article[0].chooseUs[0].text}</Typography>
            <Box className="d-flex">
                <Box className="spans-parent">
                    {data.article[0].chooseUs[0].spansTop.map((items,index)=>{
                        return (
                            <div className="block-span" key={index}>{items}</div>
                        )
                    })}
                </Box>
            </Box>
        </Box>
    )
}