const validate = require('koa2-validation');
const Joi = require('@hapi/joi');

const validator = {
    register: {
        body: {
            type: Joi.number().integer().min(0).max(1).required(),
            nickname: Joi.string().alphanum().min(1).max(20).required(),
            avatar: Joi.string().uri(),
            username: [
                Joi.string().alphanum().min(6).max(16).required(),
                Joi.string().email().required()
            ],
            password: Joi.string().min(6).max(16).required()
        }
    }
};


module.exports = {
    register: validate(validator.register)
}