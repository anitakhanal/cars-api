import DBModel from './DBModel.js';

/**
 * Model for the 'car_images' table.
 *
 * @class CarImage
 */
class CarImage extends DBModel {
  constructor() {
    super('car_images');
  }
}

export default CarImage;