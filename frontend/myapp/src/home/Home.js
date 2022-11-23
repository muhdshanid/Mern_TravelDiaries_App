import React from 'react'
import {Box} from '@mui/system';
import {Button, Typography} from '@mui/material'
import {Link} from 'react-router-dom'
const Home = () => {
  return <Box sx={{background:"#B2C8DF"}} position={'relative'} width={"100%"} height='90vh'>
    <img src="https://thumbs.dreamstime.com/b/flying-plane-blue-sky-banner-background-tropical-leaves-toy-hand-flies-to-travel-summer-vacation-relaxation-tours-222613249.jpg" alt="road" width={"100%"} height='70%' />
    <Typography fontWeight={'bold'} variant='h3' textAlign={'center'} width='100%' sx={{position:'absolute',top:'0px',
    color:'#111115de',background:'#B2C8DF'}}>
Dare to live the life you have always wanted
    </Typography>
    <Box width={'100%'} height='30%' display={'flex'} flexDirection='column'>
      <Typography textAlign={'center'} variant='h4' padding={2}>Share Your Travel Diaries With Us</Typography>
    <Box margin={'auto'}>
      <Button sx={{mr:2,mb:2}} variant='outlined'>Share Your Stories</Button>
      <Button LinkComponent={Link} to='/diaries' sx={{ml:2,mb:2}} variant='contained'>View Diaries</Button>
    </Box>
    </Box>
  </Box>
}

export default Home