import Joi from 'joi';

const schema = Joi.object({
  manufactureId: Joi.number().integer(),
  model: Joi.string(),
});

export default schema;