const mongoose = require("mongoose")

const UserModel = mongoose.model('User',{
    nome:String,
    email:String,
    password:String
})

module.exports = UserModel 