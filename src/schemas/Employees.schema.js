let Joi = require('joi').extend(require('@joi/date'));



 module.exports  = Joi.object({
    firstname: Joi.string().max(100).required(),
    lastname: Joi.string().max(100).required(),
    birthday: Joi.date().format(['YYYY/MM/DD', 'YYYY-MM-DD', 'DD/MM/YYYY', 'DD-MM-YYYY']).utc().raw(),
    position: Joi.string().required(),
    salary: Joi.number().required()
})


