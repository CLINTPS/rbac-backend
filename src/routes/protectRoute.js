const express = require('express')
const router = express.Router();
const {verifyToken} = require('../middlewares/authMiddleware')
const {checkRole} = require('../middlewares/roleMiddleware')

router.get('/admin',verifyToken,checkRole('create'),(req,res)=>{
    res.json({message:'Welcom Admin'});
});

router.get('/moderator', verifyToken, checkRole('update'), (req, res) => {
    res.json({ message: 'Welcome, Moderator!' });
});
  
router.get('/user', verifyToken, (req, res) => {
    res.json({ message: 'Welcome, User!' });
});

module.exports = router;