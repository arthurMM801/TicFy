const express = require('express')
const routes = express.Router()

//controllers
const userController = require('../APIs/controllers/userController')

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Conectado ao servidor :]'});
  });

//users
routes.get('/users', userController.get);
routes.get('/users/:id?', userController.getDatails);
routes.post('/users', userController.insert);
routes.put('/users/:id?', userController.update);
routes.delete('/users/:id?', userController.delete); 

//...


module.exports = routes
