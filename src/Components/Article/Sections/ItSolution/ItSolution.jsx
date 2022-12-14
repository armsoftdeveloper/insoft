import React from "react";
/***** Style *****/
import "./_style.scss";
/***** MUI *****/
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
/***** Redux Hooks *****/
import { useSelector } from "react-redux";
export default function ItSolution(){
    const data = useSelector((state) => state)
    return(
        <section className="it-solution container" id="services">
            <Container className="inner-it-solution" maxWidth="100">
                <Box className="titles">
                    {data.article.map((items,index)=>{
                        return (
                            <Box key={index}>
                                <Typography className="title-top">
                                    {items.itSolution[0].titles[0].titleTop}
                                </Typography>
                                <Typography className="title-bottom">
                                    {items.itSolution[0].titles[0].titleBottom}
                                </Typography>
                            </Box>
                        )
                    })}
                </Box>
                <Box className="single-items-parent">
                    {data.article.map((items,index)=>{
                        return (
                            <Box key={index} className="single-items-parent">
                                <Box className="single-items">
                                    <img src={items.itSolution[0].blocks[1].images[0]} alt="It Solution" className="img-fluid"/>
                                    <Typography className="single-item-title">
                                        {items.itSolution[0].blocks[0].titles[0]}
                                    </Typography>
                                    <Typography className="single-item-text">
                                        {items.itSolution[0].blocks[0].texts[0]}
                                    </Typography>
                                    <Link>{items.itSolution[0].blocks[0].link[0]}</Link>
                                </Box>
                                <Box className="single-items">
                                    <img src={items.itSolution[0].blocks[1].images[1]} alt="It Solution" className="img-fluid"/>
                                    <Typography className="single-item-title">
                                        {items.itSolution[0].blocks[0].titles[1]}
                                    </Typography>
                                    <Typography className="single-item-text">
                                        {items.itSolution[0].blocks[0].texts[1]}
                                    </Typography>
                                    <Link>{items.itSolution[0].blocks[0].link[0]}</Link>
                                </Box>
                                <Box className="single-items">
                                    <img src={items.itSolution[0].blocks[1].images[2]} alt="It Solution" className="img-fluid"/>
                                    <Typography className="single-item-title">
                                        {items.itSolution[0].blocks[0].titles[2]}
                                    </Typography>
                                    <Typography className="single-item-text">
                                        {items.itSolution[0].blocks[0].texts[2]}
                                    </Typography>
                                    <Link>{items.itSolution[0].blocks[0].link[0]}</Link>
                                </Box>
                                <Box className="single-items">
                                    <img src={items.itSolution[0].blocks[1].images[3]} alt="It Solution" className="img-fluid"/>
                                    <Typography className="single-item-title">
                                        {items.itSolution[0].blocks[0].titles[3]}
                                    </Typography>
                                    <Typography className="single-item-text">
                                        {items.itSolution[0].blocks[0].texts[3]}
                                    </Typography>
                                    <Link>{items.itSolution[0].blocks[0].link[0]}</Link>
                                </Box>
                                <Box className="single-items">
                                    <img src={items.itSolution[0].blocks[1].images[4]} alt="It Solution" className="img-fluid"/>
                                    <Typography className="single-item-title">
                                        {items.itSolution[0].blocks[0].titles[4]}
                                    </Typography>
                                    <Typography className="single-item-text">
                                        {items.itSolution[0].blocks[0].texts[4]}
                                    </Typography>
                                    <Link>{items.itSolution[0].blocks[0].link[0]}</Link>
                                </Box>
                                <Box className="single-items">
                                    <img src={items.itSolution[0].blocks[1].images[5]} alt="It Solution" className="img-fluid"/>
                                    <Typography className="single-item-title">
                                        {items.itSolution[0].blocks[0].titles[5]}
                                    </Typography>
                                    <Typography className="single-item-text">
                                        {items.itSolution[0].blocks[0].texts[5]}
                                    </Typography>
                                    <Link>{items.itSolution[0].blocks[0].link[0]}</Link>
                                </Box>
                            </Box>
                        )
                    })}
                </Box>
            </Container>
        </section>
    )
}