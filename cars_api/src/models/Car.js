import DBModel from './DBmodel.js';
import getAllCarsQuery from '../db/queries/getAllCars.js';
import getCarDetailsQuery from '../db/queries/getCarDetail.js';

class Car extends DBModel {
    constructor() {
        super('cars');
    }
    getAllCars(){
        return this.query(getAllCarsQuery);
    }
    
     async getCarDetail(carId) {
        const [details] = await this.query(getCarDetailsQuery, { carId });
    
        return details || null;
      }
}


export default Car;