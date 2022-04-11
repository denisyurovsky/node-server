const Joi = require('joi')

module.exports = Joi.object({
    email: Joi.string()
        .pattern(new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i))
        .required(),
    username: Joi.string().required(),
    password: Joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)).required(),
    repeatPassword: Joi.string().required().valid(Joi.ref('password')),
})