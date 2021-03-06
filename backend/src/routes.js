const express = require('express');
const routes = express.Router();
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


routes.post('/incidents',celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown(),
  [Segments.BODY]: Joi.object().keys({
    title:Joi.string().required(),
    description:Joi.string().required().email(),
    value:Joi.number().required(),
    
  })
}) ,IncidentsController.create);

routes.get('/incidents', celebrate({
  [Segments.QUERY]:Joi.object().keys({
    page: Joi.number(),
  })
}),IncidentsController.index);

routes.delete('/incidents/:id',celebrate({
  [Segments.PARAMS]:Joi.object().keys({
    id:Joi.number().required(),
  })
}),IncidentsController.delete);

routes.post('/session', celebrate({
  [Segments.BODY]:Joi.object({
    id:Joi.string().required().length(8),
  })
}),SessionController.create);

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown(), 
}),ProfileController.index);

routes.get('/ongs', OngController.index);

routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name:Joi.string().required(),
    email:Joi.string().required().email(),
    whatsapp:Joi.string().required().min(10).max(11),
    city:Joi.string().required(),
    uf:Joi.string().required().length(2)
  })
}),OngController.create);

module.exports = routes;