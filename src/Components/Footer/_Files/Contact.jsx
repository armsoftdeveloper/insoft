import React from "react";
/***** MUI *****/
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
/***** MUI Icons *****/
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
/***** Redux Hooks *****/
import { useSelector } from "react-redux";
export default function Newsletter(){
    const data = useSelector((state) => state)
    return(
        <Box className="inner-lists">
            <Box className="lists-col">
                <Typography className="title">{data.footer[0].contact[0].title}</Typography>
                <hr/>
                <List sx={{ width: '100%', maxWidth: 360, display:"flex",flexDirection:"column",gridGap:20,top:15}}>
                    <ListItem>
                      <ListItemAvatar sx={{background:"none"}}>
                          <LocalPhoneIcon />
                      </ListItemAvatar>
                      <ListItemText primary={data.footer[0].contact[0].phone}/>
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                          <EmailIcon />
                      </ListItemAvatar>
                      <ListItemText primary={data.footer[0].contact[0].email}/>
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                          <LocationOnIcon />
                      </ListItemAvatar>
                      <ListItemText primary={data.footer[0].contact[0].location}/>
                    </ListItem>
                </List>
            </Box>
            <Box className="about-us">
                <Typography className="title">{data.footer[0].aboutUs[0].title}</Typography>
                <hr/>
                <Typography className="mt-2">
                    {data.footer[0].aboutUs[0].text}
                </Typography>
                <Box className="icons-group">
                    <FacebookRoundedIcon className="icon"/>
                    <InstagramIcon className="icon"/>
                    <TwitterIcon className="icon"/>
                </Box>
            </Box>
        </Box>
    )
}