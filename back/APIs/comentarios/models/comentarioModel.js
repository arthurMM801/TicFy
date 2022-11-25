const mongoose = require("mongoose")

const ComentarioModel = mongoose.model('Comentarios',{
    nome:{
        type:String,
        required:true,
    },
    foto:{
        type:String,
        required:true,
    },
    data:{
        type:String,
        required:true,
        minLength:8
    },
    descricao:{
        type: String,
        required:true
    },
    likes:{
        type: String, 
        default: "0"
    }, 
    deslikes:{
        type: String, 
        default: "0"
    }
})

module.exports = ComentarioModel 