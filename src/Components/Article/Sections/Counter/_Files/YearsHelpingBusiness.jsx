import React from "react";
/***** MUI *****/
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
export default function YearsHelpingBussiness({data}){
    return(
        <Box className="inner-counter-box">
            <Typography variant="h2">{data.article[0].counter[0].count}</Typography>
            <Typography variant="h3">{data.article[0].counter[0].title}</Typography>
        </Box>
    )
}