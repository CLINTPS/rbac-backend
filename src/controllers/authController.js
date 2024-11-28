const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const config = require('../config/config')


const register = async (req,res)=>{
    try {
        console.log("Register Body data",req.body);
        const {username,email,password,role} = req.body;
        console.log("Body data",username,email,password,role);
        const hashedPassword = await bcrypt.hash(password,10)
        console.log("Hashed password",hashedPassword);
        
        const user = new User({username,email,password:hashedPassword,role})
        await user.save();
        res.status(200).json({message:'User registered successfully'})
    } catch(err){
        res.status(500).json({ message: 'Error registering user', error: err.message })
    }
}

const login = async (req,res)=> {
    try {
        console.log("Login Body data",req.body);
        const {email,password}=req.body;
        const user = await User.findOne({email})
        if(!user || !(await bcrypt.compare(password,user.password))){
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const token= jwt.sign({ userId: user._id, role: user.role },config.JWT_SECRET, {
            expiresIn:config.JWT_EXPIRES_IN,
        })
        res.status(200).json({token});
    } catch (err) { 
        res.status(500).json({ message: 'Error logging in', error: err.message });
    }
}

module.exports={
    register,
    login
}