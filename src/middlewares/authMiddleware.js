const jwt = require('jsonwebtoken')
const config = require('../config/config')

const verifyToken = (req,res,next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized' });
    jwt.verify(token,config.JWT_SECRET,(err,decoded)=>{
        if (err) return res.status(403).json({ message: 'Invalid token' });
        req.user = decoded;
        next();
    })
}

module.exports={
    verifyToken
}