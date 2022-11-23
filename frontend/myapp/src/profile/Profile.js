import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserDetails } from '../api-helpers/helpers'
import DiaryItem from '../diaries/DiaryItem';
import { authActions } from '../store';

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [user, setUser] = useState();
    useEffect(()=>{
        getUserDetails().then((data)=>setUser(data.user)).catch((err)=>console.log(err))
    },[])
    const handleClick = () => {
        dispatch(authActions.logout());
        localStorage.removeItem("userId");
        navigate("/");
    }
  return (
    <Box display={'flex'} flexDirection='column'>
        {user && <><Typography textAlign={'center'} variant='h3' padding={2}>User Profile</Typography>
        <Typography padding={2} textAlign='left'>Name:{user.name}</Typography>
        <Typography padding={2} textAlign='left'>Email:{user.email}</Typography>
        <Button onClick={handleClick} sx={{ml:2,mr:'auto',width:'15%'}} color='warning' variant='contained'>Logout</Button>
        <Box display={'flex'} flexDirection='column' justifyContent={'center'} alignItems='center'>
            {user.posts.map((post,index)=> <DiaryItem title={post.title} description={post.description} date={post.date}
            id={post.id} image={post.image} location={post.location} user={user._id} key={index}/>)}
        </Box></>}
    </Box>
  )
}

export default Profile