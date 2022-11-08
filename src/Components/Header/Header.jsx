import React, { useState } from "react";
/***** Style *****/
import "../Header/_style.scss";
/***** MUI *****/
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
/***** Components *****/
import Main from "../Main/Main";
/***** Redux Hooks *****/
import { useSelector } from "react-redux";
/***** React Icons *****/
import MenuIcon from '@mui/icons-material/Menu';
/***** Images *****/
import Wave from "../../Assets/Images/Header/wave.png";
import "./anim.js"
export default function Header(){
    const data = useSelector((state)=>state);
    const [toggle, setToggle] = useState(false)
    return(
        <header className="container-fluid col-12">
            <Container className="header-top" maxWidth="100">
                <Box className="lists container-fluid anim-lists">
                    <span className="logo anim-color">Company.com</span>
                    <List className="hidden">
                        {data.lists.map((items,index)=>{
                            return(
                                <ListItem disablePadding key={index}>
                                    <Link className="anim-color" href={"#"+items}>{items}</Link>
                                </ListItem>
                            )
                        })}
                    </List> 
                    <Button className="lists-button hidden">Get It Support</Button>
                    <MenuIcon className="menu-icon menu-icon-click anim-color" onClick={() => setToggle(!toggle)}/>
                </Box>
                <Box className="visible-container" id={toggle ? "show" : "hidden"}>
                    <List>
                        {data.lists.map((items,index)=>{
                            return(
                                <ListItem disablePadding key={index}>
                                    <Link>{items}</Link>
                                </ListItem>
                            )
                        })}
                    </List> 
                    <Button className="lists-button">Get It Support</Button>
                </Box>
                <Main/>
                <Box className="header-bottom-image">
                    <img src={Wave} alt="" className="wave"/>
                </Box>
            </Container>
        </header>
    )
}