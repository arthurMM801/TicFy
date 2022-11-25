const mongoose = require("mongoose")

const UserModel = mongoose.model('User',{
    nome:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    senha:{
        type:String,
        required:true,
        minLength:8
    },
    data_nasc:{
        type:String,
        required:true,
    },
    avatarURl:{
        type:String, 
        default:"https://www.sapi.com.br//site/img/sem-imagen.jpg"
    },
    gostos:{
        type:String,
        default:"Sem nenhuma preferência"
    },
    data_cadastro:{
        type:Date, 
        default: Date.now
    }
})

module.exports = UserModel 