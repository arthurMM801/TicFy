const PlaylistModel = require('../models/playlistModel');


module.exports={
    async get(req,res) {
        try {
            const musica = await PlaylistModel.find(req.body);
            console.log(req.params)
            res.status(200).json(musica)
        }catch(erro){
            console.log(erro)
            res.status(404).json({message:"Erro ao tentar pegar as musicas"})
        }
    },
    async getDetails(req,res) {
        const id = req.params.id
        try {
            const musica = await PlaylistModel.findById(id)
            res.status(200).json(musica)
        }catch(erro){
            console.log(erro)
            res.status(404).json({message:`Música de id (${id}) não encontrado`})
        }
    },
    async insert(req,res){   
        const {nomeMusica, nomePlaylist, fotoMusica, fotoPlaylist, albumMusica, dataMusica, duracaoMusica} = req.body

        if(!nomeMusica){
            return res.status(422).json({msg:"É necessário inserir o nome da música"})
        }
        if(!duracaoMusica){
            return res.status(422).json({msg:"É necessário inserir a duração da música"})
        }
        if(!albumMusica){
            return res.status(422).json({msg:"É necessário inserir o nome do album"})
        }

        const adicionarMusica = new PlaylistModel({
            nomeMusica, nomePlaylist, fotoMusica, fotoPlaylist, albumMusica, dataMusica, duracaoMusica
        })

        try{
            await PlaylistModel.create(adicionarMusica)
            res.status(201).json({message: "Música adicionada!"})
        }catch(erro){
            res.status(400).json({message:"Ocorreu um erro ao enviar a música"});
            console.log("erro: " + erro)
        }
    },
    async update(req,res){   
        const id = req.params.id
        try {
            await PlaylistModel.findByIdAndUpdate(id,req.body)
            res.status(200).json({message:`Música de id ${id} atualizado`})
        }catch(erro){
            res.status(400).json({message:"Erro ao atualizar a Música"});
            console.log("erro: " + erro)
        }
    },
    async delete(req,res){
        const id = req.params.id;
        try{
            await PlaylistModel.findByIdAndDelete(id)
            res.status(200).json({message:`Música de id ${id} deletado com sucesso`});
        }catch(erro){
            res.status(400).json({message:`Não foi possivel deletar a música de id ${id}`});
            console.log("erro: " + erro)
        }
    }
}