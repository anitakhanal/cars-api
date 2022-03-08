import joi from 'joi';

const schema = joi.object({
    manufactureId: joi.number().integer().optional(),
    model: joi.string().max(20).optional(),
    horsepower: joi.number().integer().min(1000).optional(),
    images: joi.object({
      added: joi.array().items(joi.string()).optional(),
      removed: joi.array().items(joi.string()).optional()
    }).optional()
});
export default schema;