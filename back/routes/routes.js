const express = require('express')
const routes = express.Router()

//controllers

const comentarioController = require('../APIs/controllers/comentarioController')
const userController = require('../APIs/controllers/userController')


routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Conectado ao servidor :]'});
  });

//users
routes.get('/users', userController.users);
routes.get('/users/:id?', userController.datailsUser);
routes.post('/auth/register', userController.registerUser);
//routes.post('/auth/login', userController.loginUser);
routes.put('/users/:id?', userController.updateUser);
routes.delete('/users/:id?', userController.deleteUser); 

//comentarios
routes.get('/comentarios', comentarioController.get);
routes.get('/comentarios/:id?', comentarioController.getDetails);
routes.post('/comentarios', comentarioController.insert);
routes.put('/comentarios/:id?', comentarioController.update);
routes.delete('/comentarios/:id?', comentarioController.delete);

//...


module.exports = routes
