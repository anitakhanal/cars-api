import bcrypt from 'bcrypt';
import Boom from '@hapi/boom';

import User from '../models/User.js';
import logger from '../utils/logger.js';
import { hash, compare, createToken } from '../utils/crypt.js';

export async function createUser(params){
    const { name, email, password } = params;

    const existingUser = await new User().findByParams({ email });
    
    if(existingUser) {
        logger.error('The email address is already taken');
        
        throw new Boom.badRequest('The email address is already taken');
    }
        const hashedPassword = bcrypt.hashSync(password, 10);
        

        const [insertData] = await new User().save({ name, email, password:hashedPassword });
    //    console.log(insertData);
        return {
            data:insertData,
            message: 'Added user sucessfully'
        };
}

/**
 * Login validation and token generation.
 *
 * @param {Object} params
 * @return {Object}
 */

export async function login(params){
    const { email, password } = params;
    const existingUser = await new User().findByParams({ email });

    if(!existingUser){
        logger.error('invalid credentials:could not find the associated email');

        throw new Boom.badRequest("invalid credentails");
    }

    const doesPasswordMatch = compare(password, existingUser.password);
    if(!doesPasswordMatch){
        logger.error('invalid credentials:password doesnot match');

        throw new Boom.badRequest('invalid credentials ');

    }

    const user = {
        id : existingUser.id,
        name: existingUser.name,
        email:existingUser.email
    };

    const token = createToken(user);

    return{
        data: {token, user},
        message: 'logged in sucessfully'
    };
}
