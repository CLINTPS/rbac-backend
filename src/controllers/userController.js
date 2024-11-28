const getProfile = (req,res) => {
    res.status(200).json({ message: 'User profile data', user: req.user });
}

module.exports={
    getProfile
}