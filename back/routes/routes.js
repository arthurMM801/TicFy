const express = require('express')
const routes = express.Router()

//controllers

const comentarioController = require('../APIs/controllers/comentarioController')
const userController = require('../APIs/controllers/userController')
const playlistController = require('../APIs/controllers/playlistController')


routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Conectado ao servidor :]'});
  });

//users
routes.get('/users', userController.users);
routes.get('/users/:id?', userController.datailsUser);
routes.post('/auth/register', userController.registerUser);
routes.put('/users/:id?', userController.updateUser);
routes.delete('/users/:id?', userController.deleteUser); 

//comentarios
routes.get('/comentarios', comentarioController.get);
routes.get('/comentarios/:id?', comentarioController.getDetails);
routes.post('/comentarios', comentarioController.insert);
routes.put('/comentarios/:id?', comentarioController.update);
routes.delete('/comentarios/:id?', comentarioController.delete);

//playlist
routes.get('/musica', playlistController.get);
routes.get('/musica/:id?', playlistController.getDetails);
routes.post('/musica', playlistController.insert);
routes.put('/musica/:id?', playlistController.update);
routes.delete('/musica/:id?', playlistController.delete);



module.exports = routes
