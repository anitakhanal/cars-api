import DBModel from './DBmodel.js';

class Manufacturer extends DBModel {
    constructor() {
        super('manufactures');
    }
}
export default Manufacturer;