const UserModel = require('../models/userModel')
module.exports={
    async get(req,res){
        const users = await UserModel.find(req.body);
        console.log(req.params)
        res.status(200).json(users)
    },

    async getDatails(req,res){
        const id = req.params.id
        const user = await UserModel.findById(id)
        .then(()=>{
            res.status(200).json(user)
        })
        .catch(()=>{
            res.status(404).json({message:`Usuario de id ${id} não encontrado`})
        })       
    },

    async insert(req,res){   
        const usuario = await UserModel.create(req.body).then(()=>{
            res.status(201).json(usuario);
        })
        .catch((err)=>{
            res.status(400).json({message:"Deu algum erro ao enviar usuario para o banco"});
            console.log("erro ----> " + err)
        })
    },

    async update(req,res){   
        const id = req.params.id
        await UserModel.findByIdAndUpdate(id,req.body)
        .then(()=>{
            res.status(200).json({message:`Usuario de id ${id} atualizado`});
        })
        .catch((err)=>{
            res.status(400).json({message:"Deu algum erro ao atualizar os dados usuario"});
            console.log("erro ----> " + err)
        })
    },

    async delete(req,res){
        const id = req.params.id;
        await UserModel.findByIdAndDelete(id)
        res.status(200).json({message:`Usuario de id ${id} deletado`});
    }
} 