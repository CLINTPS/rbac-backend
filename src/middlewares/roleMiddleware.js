const roles = require('../models/roleModel')

const checkRole = (requiredRole) => (req,res,next) => {
    if(!roles[req.user.role]?.includes(requiredRole)) {
        return res.status(403).json({ message: 'Insufficient role' });
      }
      next()
}

module.exports={
  checkRole
}