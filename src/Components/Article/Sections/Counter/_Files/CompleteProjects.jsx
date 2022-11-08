import React from "react";
/***** MUI *****/
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
export default function CompleteProjects({data}){
    return(
        <Box className="inner-counter-box">
            <Typography variant="h2">{data.article[0].counter[2].count}</Typography>
            <Typography variant="h3">{data.article[0].counter[2].title}</Typography>
        </Box>
    )
}