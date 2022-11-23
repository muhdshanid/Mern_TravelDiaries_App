import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { getAllPosts } from '../api-helpers/helpers'
import DiaryItem from './DiaryItem'

const Diaries = () => {
  const [posts, setPosts] = useState()
  useEffect(()=> {
    getAllPosts().then((data)=>setPosts(data?.posts)).catch((err)=> console.log(err))
  },[])
  return <Box display={'flex'} flexDirection='column' padding={3} justifyContent='center ' alignItems={'center'}>
    { posts && posts.map((post,index)=> <DiaryItem date={new Date(`${post.date}`).toLocaleDateString()}
    description={post.description}  image={post.image} id= {post._id} location={post.location} title={post.title}
      key={index} user={post.user._id} name={post.user.name}/>)}
   
  </Box>
}

export default Diaries