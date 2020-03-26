const express = require('express');
const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


routes.post('/incidents',IncidentsController.create);
routes.get('/incidents',IncidentsController.index);
routes.delete('/incidents/:id',IncidentsController.delete);

routes.post('/session', SessionController.create);

routes.get('/profile', ProfileController.index);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

module.exports = routes;