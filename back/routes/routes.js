const express = require('express')
const routes = express.Router()

//controllers
const userController = require('../APIs/users/controllers/userController')
const comentarioController = require('../APIs/comentarios/controllers/comentarioController')

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Conectado ao servidor :]'});
  });

//users
routes.get('/users', userController.get);
routes.get('/users/:id?', userController.getDatails);
routes.post('/users', userController.insert);
routes.put('/users/:id?', userController.update);
routes.delete('/users/:id?', userController.delete); 

//comentarios
routes.get('/comentarios', comentarioController.get);
routes.get('/comentarios/:id?', comentarioController.getDatails);
routes.post('/comentarios', comentarioController.insert);
routes.put('/comentarios/:id?', comentarioController.update);
routes.delete('/comentarios/:id?', comentarioController.delete);

//...


module.exports = routes
