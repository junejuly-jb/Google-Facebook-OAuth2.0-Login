const Joi = require('joi')

const registerValidation = (data) => {

    const schema = Joi.object({

        email: Joi.required().string().email(),
        Password: Joi.required().string()

    })

    return schema.validate(data)

}


module.exports.registerValidation = registerValidation