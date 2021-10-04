//IMPORTING JOI
const Joi = require('joi');

//REGISTER VALIDATION FUNCTION
const registerValidation = (data) =>{
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
}

//LOGIN VALIDATION FUNCTION
const loginValidation = (data) =>{
    const schema = Joi.object({
        
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()

    });
    return schema.validate(data);
}


//EXPORTING THEM
module.exports.registerValidation =registerValidation;
module.exports.loginValidation =loginValidation;

