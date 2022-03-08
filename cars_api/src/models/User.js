import DBmodel from './DBmodel.js';

class User extends DBmodel {
    constructor() {
        super('users');
    }
}
export default User;