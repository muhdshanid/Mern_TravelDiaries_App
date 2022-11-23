import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import {AppBar,Toolbar,Tabs,Tab} from '@mui/material'
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import { useSelector } from 'react-redux';
const links = ["home","diaries","auth"];
const loggedInLinks = ["home",'diaries','add','profile'];

const Header = () => {
  const isLoggedIn = useSelector((state)=>state.isLoggedIn);
    const [value, setValue] = useState()
  return <AppBar position='sticky' sx={{bgcolor:"transparent"}}>
    <Toolbar>
        <ModeOfTravelIcon sx={{color:'black'}}/>
        <Tabs  value={value} onChange={(e,val)=>setValue(val)} sx={{ml:"auto",textDecoration:"none"}}>
            {isLoggedIn ? loggedInLinks.map((link,index)=> <Tab LinkComponent={Link} to={`/${link==="home" ? "" : link}`} sx={{textDecoration:"none",":hover":{
                textDecoration:"underline",textUnderlineOffset:'18px'
            }}} key={index} label={link}/>) : links.map((link,index)=> <Tab LinkComponent={Link} to={`/${link==="home" ? "" : link}`} sx={{textDecoration:"none",":hover":{
                textDecoration:"underline",textUnderlineOffset:'18px'
            }}} key={index} label={link}/>)}
        </Tabs>
    </Toolbar>
  </AppBar>
}

export default Header