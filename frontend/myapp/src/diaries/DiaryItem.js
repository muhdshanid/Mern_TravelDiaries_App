import React,{useState} from 'react'
import {  Alert, Card, CardActions, Snackbar } from '@mui/material';
import { CardHeader } from '@mui/material';
import { Avatar } from '@mui/material';
import { IconButton } from '@mui/material';
import { Box } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
import { deletePost } from '../api-helpers/helpers';

const DiaryItem = ({title,description,image,location,date,id,user,name}) => {
  const [open, setOpen] = useState(false)
  const isLoggedInUser = () => {
    if(localStorage.getItem("userId") === user) {
      return true
    }
    return false
  }
  const handleDelete = () => {
    deletePost(id).then((data)=>console.log(data)).catch((err)=>console.log(err));
    setOpen(true)
  }
  return (
  <Card sx={{ width: "50%" ,height:'75vh',margin:1,padding:1,display:'flex',flexDirection:'column',boxShadow:'5px 5px 10px #ccc'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            {name.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {<EditLocationAltIcon/>}
          </IconButton>
        }
        title={location}
        
        subheader={date}
      />
      <img
        height="194"
        src={image}
        alt={title}
      />
      <CardContent>
        <Typography paddingBottom={1} variant="h6" color="text.secondary">
          {title}
        </Typography>
        <hr />
        <Box display={'flex'}  paddingTop={1}>
          <Typography width={'170px'} fontWeight={'bold'} variant='div'>{name}:</Typography>
        <Typography height={'10px'}  variant="body2" color="text.secondary">
          {description}
        </Typography>
        </Box>
      </CardContent>
   { isLoggedInUser() && <CardActions sx={{ml:'auto'}}>
      <IconButton LinkComponent={Link} to={`/post/${id}`}><EditIcon color='warning'/></IconButton>
      <IconButton onClick={handleDelete}><DeleteForeverIcon color='error'/></IconButton>
    </CardActions>}
    <Snackbar open={open} autoHideDuration={6000} onClose={()=>setOpen(false)}>
  <Alert onClose={()=>setOpen(false)} severity="success" sx={{ width: '100%' }}>
    This is a success message!
  </Alert>
</Snackbar>
    </Card>)
}

export default DiaryItem