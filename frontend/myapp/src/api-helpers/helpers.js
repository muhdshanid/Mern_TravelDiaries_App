import axios from 'axios';
export const getAllPosts = async () => {

 const res = await   axios.get("/post");
 if(res.status !== 200){
    return console.log("Some Error Occured");
 }

 const data = res.data;
 return data;
}

export const sendAuthRequest = async (signup,data) =>  {
    const res = await axios.post(`/user/${signup ? "signup" : "login"}/`,{
        name:data.name ? data.name : "",
        email:data.email,
        password:data.password
    }).catch((err)=> console.log(err));

    if(res.status !== 200 && res.status !== 201){
        return console.log("Unable To Authenticate");
    }


    const resData = await res.data;
    return resData;
}

export const addPost = async (data) => {
 const res = await   axios.post("/post",{
        title:data.title,
        description:data.description,
        location:data.location,
        image:data.imageUrl,
        date:data.date,
        user: localStorage.getItem("userId")
    }).catch((err)=> console.log(err));

    if(res.status !== 201) {
        return console.log("Error Occured");
    }

    const resData = await res.data;
    return resData
}

export const getPostDetails = async (id) => {
    const res = await axios.get(`/post/${id}`).catch((err)=> console.log(err))

    if(res.status !== 200) {
        return console.log("Unabel to fetch diary");
    }

    const data = await res.data;
    return data;
}


export const updatePost = async (data,id)  => {
  const res = await  axios.put(`/post/${id}`,{
        title:data.title,
        description:data.description,
        location:data.location,
        image:data.imageUrl
    }).catch((err) => console.log(err))

    if(res.status !== 200) {
        return console.log("Unable To Update");
    }

    const resData = await res.data;
    return resData;
}

export const deletePost = async (id) => {
    const res =await axios.delete(`/post/${id}`).catch((err)=>console.log(err))

    if(res.status !== 200) {
        return console.log("Unable To Delete");
    }
    const data = await res.data;
    return data;
}

export const getUserDetails = async() => {
    const id = localStorage.getItem("userId")
    const res = await axios.get(`/user/${id}`).catch((err) => console.log(err))
    if(res.status !== 200) {
        return console.log("No User Found");
    }

    const data = await res.data;
    return data
}