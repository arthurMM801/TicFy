const UserModel = require('../models/userModel')
//const bcrypt= require('bcrypt')
//const jwt = require('jsonwebtoken')

module.exports={
    async users(req,res){
        try{
            const users = await UserModel.find(req.body);
            console.log(req.params)
            res.status(200).json(users)
        }
        catch(err){
            console.log(err)
            res.status(404).json({message:`Algo deu errado`})
        }
    },
    async datailsUser(req,res){
        const id = req.params.id
        try{
            const user = await UserModel.findById(id)
            res.status(200).json(user)
        }
        catch(err){
            console.log(err)
            res.status(404).json({message:`Usuario de id ${id} não encontrado`})
        }  
    },
    async registerUser(req,res){
        //descontrução do body
        const {nome, email, senha, confirmarSenha, data_nasc} = req.body

        //tratamento de dados
        if(!nome){
            return res.status(422).json({msg:"o nome é obrigatório"})
        }
        if(!email){
            return res.status(422).json({msg:"o email é obrigatório"})
        }
        if(!senha){
            return res.status(422).json({msg:"a senha é obrigatória"})
        }
        if(confirmarSenha !== senha){
            return res.status(422).json({msg:"senhas não conferem"})
        }
        if(!data_nasc){
            return res.status(422).json({msg:"a data de nascimento é obrigatória"})
        }
        const verifyEmail = await UserModel.findOne({email:email})
        if(verifyEmail){
            return res.status(422).json({msg:"Erro! seu email já está cadastrado no nosso banco"})
        }
        //encriptar senha
        const salt = await bcrypt.genSalt(12)
        const senhaHash = await bcrypt.hash(senha, salt)

        //Enviar usuario
        const validatedUser = new UserModel({
            nome,
            email,
            senha: senhaHash,
            data_nasc
        })
        await UserModel.create(validatedUser)
        .then(()=>{
            res.status(201).json({message: "Usuario enviado! :)"});
        })
        .catch((err)=>{
            res.status(400).json({message:"Deu algum erro ao enviar usuario para o banco"});
            console.log("erro ----> " + err)
        })
    },
    /*
    async loginUser(req,res){
        //descontrução do body
        const {email, senha, } = req.body

        //Validações
        if(!email){
            return res.status(422).json({msg:"o email é obrigatório"})
        }
        if(!senha){
            return res.status(422).json({msg:"a senha é obrigatória"})
        }
        const user = await UserModel.findOne({email:email})
        if(!user){
            return res.status(404).json({msg:"Erro! email não encontrado"})
        }
        const verifyPass = await bcrypt.compare(senha, user.senha)
        if(!verifyPass){
            return res.status(422).json({msg:"Senha inválida"})
        }

        //talvez eu termine....
    },
    */
    async updateUser(req,res){   
        
        const id = req.params.id
        try{
            await UserModel.findByIdAndUpdate(id,req.body)
            res.status(200).json({message:`Usuario de id ${id} atualizado`})
        }
        catch(err){
            res.status(400).json({message:"Deu algum erro ao atualizar os dados usuario"});
            console.log("erro ----> " + err)
        }
    },
    async deleteUser(req,res){
        const id = req.params.id;
        try{
            await UserModel.findByIdAndDelete(id)
            res.status(200).json({message:`Usuario de id ${id} deletado`});
        }
        catch(err){
            res.status(400).json({message:"Deu algum erro ao atualizar os dados usuario"});
            console.log("erro ----> " + err)           
        }
    }
} 