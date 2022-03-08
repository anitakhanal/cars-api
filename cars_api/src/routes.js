import { Router } from 'express';

import loginSchema from './schemas/login.js';
import addCarSchema from './schemas/addCar.js';
import addUserSchema from './schemas/addUser.js';
import updateCarSchema from './schemas/updateCar.js';
import * as apiController from './controllers/api.js';
import * as carController from './controllers/car.js';
import authenticate from './middleware/authenticate.js';
import * as userController from './controllers/user.js';
import getCarsQuerySchema from './schemas/getCarsQuery.js';
import * as manufacturerController from './controllers/manufacture.js';
import { validateBody, validateQueryParams } from './middleware/validation.js';

const router = Router();

router.get('/', apiController.getAPIDetails);

router.get('/manufacturers',  authenticate, manufacturerController.getManufacturers);

router.get('/cars',  authenticate, validateQueryParams(getCarsQuerySchema), carController.getCars);

router.get('/cars/:carIdentifier', carController.getCar);

router.post('/cars', validateBody(addCarSchema), carController.saveCar);

router.put('/cars/:carIdentifier', carController.updateCar);

router.delete('/cars/:carIdentifier', carController.removeCar);

router.post('/users', validateBody(addUserSchema), userController.addUser);

router.post('/login', validateBody(loginSchema), userController.login)
export default router;