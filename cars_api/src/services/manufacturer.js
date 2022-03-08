import logger from '../utils/logger.js';
import Manufacturer from '../models/Manufacture.js';

export async function getManufacturers() {
    logger.info('feteching list of manufactures');
    const data = await new Manufacturer().getAll();

    return {
        data,
        message:'List of Manufactures'
    };
}