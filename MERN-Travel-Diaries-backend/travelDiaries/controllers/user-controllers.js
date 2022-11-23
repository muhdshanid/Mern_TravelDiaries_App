import { compareSync, hashSync } from "bcryptjs";
import User from "../model/User";

export const getAllUsers  = async (req,res,next) =>{
    let users;
    try {
        users = await User.find()
    } catch (error) {
        return console.log(error);
    }

    if(!users) {
       return res.status(500).json({message:"Unexpected Error Occured "})
    }

    return res.status(200).json({users})
}

export const signup = async (req,res,next) => {
    const {name,email,password} = req.body;
    if(!name &&  !email && email.trim() ==="" && !password && password.length <6){
        return res.status(422).json({message:"Invalid Data"})
    }

    const hashedPassword = hashSync(password.toString())

    let user;
    try {
        user = new User({
            name,email,password:hashedPassword
        })
        await user.save();
    } catch (error) {
        return console.log(error);
    }

    if(!user) {
        return res.status(500).json({message:"Unexpected Error Occured"})
    }

    return res.status(201).json({user})
}


export const login = async (req,res,next) => {
    const {email,password} = req.body;
    if( !email && email.trim() ==="" && !password && password.length <6){
        return res.status(422).json({message:"Invalid Data"})
    }
    let existingUser ;
    try {
        existingUser = await User.findOne({email})
    } catch (error) {
        return console.log(error);
    }
    if(!existingUser){
        return res.status(404).json({message:"No User Found"})
    }
    const isPasswordCurrect = compareSync(password.toString(),existingUser.password)
    if(!isPasswordCurrect){
        return res.status(400).json({message:"Incorrect Password"})
    }
    return res.status(200).json({id:existingUser._id,message:"Login Successful"})
}

export const getUserById = async (req,res) => {
    const id = req.params.id;

    let user;
    try {
        user = await User.findById(id).populate("posts");

    } catch (error) {
        return console.log(error);
    }

    if(!user) {
        return res.status(404).json({message:"No User Found"})
    }

    return res.status(200).json({user})
}