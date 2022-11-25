const ComentarioModel = require('../models/comentarioModel')

module.exports={
    async get(req,res){
        const comentario = await ComentarioModel.find(req.body);
        console.log(req.params)
        res.status(200).json(comentario)
    },
    async getDatails(req,res){
        const id = req.params.id
        const comentario = await ComentarioModel.findById(id)
        .then(()=>{
            res.status(200).json(comentario)
        })
        .catch(()=>{
            res.status(404).json({message:`Comentário de id (${id}) não encontrado`})
        })       
    },
    async insert(req,res){   
        await ComentarioModel.create(req.body)
        .then(()=>{
            res.status(201).json({message: "Comentário enviado! ---"});
        })
        .catch((err)=>{
            res.status(400).json({message:"Deu algum erro ao enviar o comentário para o banco"});
            console.log("erro ----> " + err)
        })
    },
    async update(req,res){   
        const id = req.params.id
        await ComentarioModel.findByIdAndUpdate(id,req.body)
        .then(()=>{
            res.status(200).json({message:`Comentário de id ${id} atualizado`});
        })
        .catch((err)=>{
            res.status(400).json({message:"Deu algum erro ao atualizar o Comentário"});
            console.log("erro ----> " + err)
        })
    },
    async delete(req,res){
        const id = req.params.id;
        await ComentarioModel.findByIdAndDelete(id)
        res.status(200).json({message:`Comentário de id ${id} deletado`});
    }
} 