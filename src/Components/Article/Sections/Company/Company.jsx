import React from "react";
/***** Style *****/
import "./_style.scss";
/***** MUI *****/
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
/***** Redux Hooks *****/
import { useSelector } from "react-redux";
export default function Company(){
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 6,
        width:600,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#7869E6' : '#F1F1F9',
        },
      }));
      
    const data = useSelector((state) => state)
    return(
        <section className="company-container" id="about us">
            <Box className="inner-company">
                <Box className="left-container">
                <Box className="typography-container">
                    {data.article.map((items,index)=>{
                        return (
                            <Box key={index}>
                                <Typography className="title-top">
                                    {items.aboutCompany[0].title}
                                </Typography>
                                <Typography className="title-bottom">
                                    {items.aboutCompany[0].titleBottom}
                                </Typography>
                                <Typography className="typography">
                                    {items.aboutCompany[0].typography}
                                </Typography>
                            </Box>
                        )
                    })}
                </Box>
                <Box className="progress-bar">
                    {data.article.map((items,index)=>{
                        return(
                            <Box key={index}>
                                <Box className="progress-item">
                                    <Box className="inner-progress">
                                        <Typography className="name">
                                            {items.aboutCompany[1].names[0]}
                                        </Typography>
                                        <Typography>
                                            {items.aboutCompany[1].progressProcent[0]}
                                        </Typography>
                                    </Box>
                                    <BorderLinearProgress variant="determinate" value={items.aboutCompany[1].progress[0]}/>
                                </Box>
                                <Box className="progress-item">
                                    <Box className="inner-progress">
                                        <Typography className="name">
                                            {items.aboutCompany[1].names[1]}
                                        </Typography>
                                        <Typography>
                                            {items.aboutCompany[1].progressProcent[1]}
                                        </Typography>
                                    </Box>
                                    <BorderLinearProgress variant="determinate" value={items.aboutCompany[1].progress[1]} />
                                </Box>
                                <Box className="progress-item">
                                    <Box className="inner-progress">
                                        <Typography className="name">
                                            {items.aboutCompany[1].names[2]}
                                        </Typography>
                                        <Typography>
                                            {items.aboutCompany[1].progressProcent[2]}
                                        </Typography>
                                    </Box>
                                    <BorderLinearProgress variant="determinate" value={items.aboutCompany[1].progress[2]} />
                                </Box>
                                <Button>Learn More</Button>
                            </Box>
                        )
                    })}
                </Box>
                </Box>
                <Box className="image-container">
                <Box className="inner-image-container">
                    {data.article.map((items,index)=>{
                        return(
                            <img src={items.aboutCompany[2].image[0]} key={index}/>
                        )
                    })}
                </Box>
                </Box>
            </Box>
        </section>
    )
}