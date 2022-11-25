const mongoose = require("mongoose")

const UserModel = mongoose.model('User',{
    nome:String,
    email:String,
    senha:String,
    confirmarSenha:String,
    data_nasc:String,
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