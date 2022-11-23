import { Box, Button, FormLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { addPost } from '../api-helpers/helpers';
import { useNavigate } from 'react-router-dom';
const Add = () => {
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({title:"",description:"",location:"",imageUrl:"",date:""})
    const handleChange = (e) => {
        setInputs((prevState)=>({
           ...prevState,
           [e.target.name]:e.target.value
        }))
    }
    const onResReceived = (data) => {
        console.log(data);

        navigate("/diaries")
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        addPost(inputs).then(onResReceived).catch((err) => console.log(err))
    }
  return <Box display={'flex'} flexDirection='column' width={'100%'} height='100%'>
    <Box display={'flex'} margin='auto' padding={2}>
    <Typography  variant='h4' fontFamily={'fantasy'}>Add Your Travel Diary</Typography>
    <TravelExploreIcon sx={{fontSize:'40px',pl:1,color:"lightcoral"}}/>
    </Box>
    <form onSubmit={handleSubmit} action="">
        <Box width={'80%'} padding={3} display='flex' margin={'auto'} flexDirection='column'>
            <FormLabel>Title</FormLabel>
            <TextField value={inputs.title} name='title' onChange={handleChange} variant='standard' margin='normal'/>
            <FormLabel>Description</FormLabel>
            <TextField value={inputs.description} name='description' onChange={handleChange} variant='standard' margin='normal'/>
            <FormLabel>Image URL</FormLabel>
            <TextField value={inputs.imageUrl} name='imageUrl' onChange={handleChange}  variant='standard' margin='normal'/>
            <FormLabel>Location</FormLabel>
            <TextField value={inputs.location} name='location' onChange={handleChange} variant='standard' margin='normal'/>
            <FormLabel>Date</FormLabel>
            <TextField type={'date'} value={inputs.date} name='date' onChange={handleChange} variant='standard' margin='normal'/>
            <Button type='submit' variant='contained' sx={{mt:5,width:'50%',margin:'auto',borderRadius:7}} color='warning'>Post</Button>
        </Box>
    </form>
  </Box>
}

export default Add