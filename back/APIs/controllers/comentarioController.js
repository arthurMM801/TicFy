const ComentarioModel = require('../models/comentarioModel')

module.exports={
    async get(req,res){
        try{
            const comentario = await ComentarioModel.find(req.body)
            console.log(req.params)
            res.status(200).json(comentario)
        }catch(erro){
            console.log(erro)
            res.status(404).json({message:"Erro ao tentar pegar os comentarios"})
        }
    },
    async getDetails(req,res){
        const id = req.params.id
        try{
            const comentario = await ComentarioModel.findById(id)
            res.status(200).json(comentario)
        }
        catch(erro){
            console.log(erro)
            res.status(404).json({message:`Comentario de id ${id} não encontrado`})
        }  
    },
    async insert(req,res){   
        const {nome, foto, data, descricao, likes, deslikes} = req.body

        //tratamento de dados
        if(!nome){
            return res.status(422).json({msg:"o nome é obrigatório"})
        }
        if(!foto){
            return res.status(422).json({msg:"a foto é obrigatório"})
        }
        if(!descricao){
            return res.status(422).json({msg:"não e posivel comentar um texto vazio"})
        }

        //Envia comentario
        const validatedComent = new ComentarioModel({
            nome, foto, data, descricao, likes, deslikes
        })

        try{
            await ComentarioModel.create(validatedComent)
            res.status(201).json({message: "Comentário enviado!!"})
        }catch(erro){
            res.status(400).json({message:"Deu algum erro ao enviar o comentário para o banco"});
            console.log("erro: " + erro)
        }
    },
    async update(req,res){   
        const id = req.params.id
        try{
            await ComentarioModel.findByIdAndUpdate(id,req.body)
            res.status(200).json({message:`Comentário de id ${id} atualizado`})
        }catch(erro){
            res.status(400).json({message:"Deu algum erro ao atualizar o Comentário"});
            console.log("erro: " + erro)
        }
    },
    async delete(req,res){
        const id = req.params.id;
        try{
            await ComentarioModel.findByIdAndDelete(id)
            res.status(200).json({message:`Comentário de id ${id} deletado`});
        }catch(erro){
            res.status(400).json({message:`Não foi possivel deletar o comentario de id ${id}`});
            console.log("erro: " + erro)
        }
        
    }
} 