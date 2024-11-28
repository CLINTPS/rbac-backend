const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/config')
const authRoute = require('./routes/authRoute')
const userRoute = require('./routes/userRoute')
const protectRoute = require('./routes/protectRoute')

const app = express()

app.use(express.json())

app.use('/api/auth',authRoute)
app.use('/api/user',userRoute)
app.use('/api/protect',protectRoute)

mongoose
.connect(config.DATABASE_URL)
.then(()=>console.log('Connected to MongoDB'))
.catch((err)=>console.error('MongoDB connection error:', err));

app.listen(config.PORT,()=>{

})