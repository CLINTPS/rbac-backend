const roles = {
    Admin: ['create','read','update','delete'],
    Moderator: ['read','update'],
    User: ['read'],
}

module.exports=roles;