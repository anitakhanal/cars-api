import joi from 'joi';

const schema = joi.object({
    email:joi.string().email().max(50).required(),
    name:joi.string().max(50).required(),
    password:joi.string().min(8).max(20).required()

});
export default schema;