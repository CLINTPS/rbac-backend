require('dotenv').config()

const config = {
    PORT : process.env.PORT || 5000,
    DATABASE_URL : process.env.DATABASE_URL || 'mongodb://localhost:27017/rbac-db',
    JWT_SECRET : process.env.JWT_SECRET || 'rbacbackendprojectjsonwebtokesecret',
    JWT_EXPIRES_IN : process.env.JWT_EXPIRES_IN || '1h',
}

module.exports=config;