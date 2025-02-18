const joi = require('joi');
const { validate } = require('joi');

const loginSchema = joi.object({
    email:joi.string().email().required(),
    password:joi.string().required()
});

const signupSchema = joi.object({
    name:joi.string().required(),
    email:joi.string().email().required(),
    password:joi.string().required()
});

const validateLogin = (req,res,next) => {
    const {error} = loginSchema.validate(req.body);
    if(error){
        return res.status(400).json({message:error.details[0].message});
    }
    next();
}

module.exports = {validateLogin,loginSchema,signupSchema};