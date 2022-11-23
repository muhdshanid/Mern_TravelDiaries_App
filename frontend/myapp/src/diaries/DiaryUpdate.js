import { Button, FormLabel, TextField, Typography } from '@mui/material';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPostDetails, updatePost } from '../api-helpers/helpers';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
const DiaryUpdate = () => {
    const [post, setPost] = useState()
    const [inputs, setInputs] = useState({ title: "", description: "", location: "", imageUrl: "", date: "" })
    const id = useParams().id;
    console.log(id);
    useEffect(() => {
        getPostDetails(id).then((data) => {
            setPost(data.post);
            setInputs({
                title: data.post.title,
                description: data.post.description,
                imageUrl: data.post.image,
                location: data.post.location,
            
            })
        }).catch((err) => console.log(err))
    }, [id])

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        updatePost(inputs,id).then((data)=>console.log(data)).catch((err)=> console.log(err))
    }
    return <Box display={'flex'} flexDirection='column' width={'100%'} height='100%'>
        <Box display={'flex'} margin='auto' padding={2}>
            <Typography variant='h4' fontFamily={'fantasy'}>Add Your Travel Diary</Typography>
            <TravelExploreIcon sx={{ fontSize: '40px', pl: 1, color: "lightcoral" }} />
        </Box>
        { post && <form onSubmit={handleSubmit} action="">
            <Box width={'80%'} padding={3} display='flex' margin={'auto'} flexDirection='column'>
                <FormLabel>Title</FormLabel>
                <TextField value={inputs.title} name='title' onChange={handleChange} variant='standard' margin='normal' />
                <FormLabel>Description</FormLabel>
                <TextField value={inputs.description} name='description' onChange={handleChange} variant='standard' margin='normal' />
                <FormLabel>Image URL</FormLabel>
                <TextField value={inputs.imageUrl} name='imageUrl' onChange={handleChange} variant='standard' margin='normal' />
                <FormLabel>Location</FormLabel>
                <TextField value={inputs.location} name='location' onChange={handleChange} variant='standard' margin='normal' />
            
                <Button type='submit' variant='contained' sx={{ mt: 5, width: '50%', margin: 'auto', borderRadius: 7 }} color='warning'>Post</Button>
            </Box>
        </form>}
    </Box>

}

export default DiaryUpdate