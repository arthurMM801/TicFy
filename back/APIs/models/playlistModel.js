const mongoose = require("mongoose")

const PlaylistModel = mongoose.model('Playlist', {
    nomeMusica:{
        type:String,
        required:true
    },
    nomePlaylist:{
        type:String,
        required:true
    },
    fotoMusica:{
        type:String,
        required:true
    },
    fotoPlaylist:{
        type:String,
        default: "https://www.sapi.com.br//site/img/sem-imagen.jpg"
    },
    albumMusica:{
        type:String,
        required:true
    },
    dataMusica:{
        type:Date,
        default: Date.now
    },
    duracaoMusica:{
        type:String,
        default: "0"
    },
})

module.exports = PlaylistModel