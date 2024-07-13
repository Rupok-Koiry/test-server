'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.CarRoutes = void 0;
const express_1 = __importDefault(require('express'));
const auth_1 = __importDefault(require('../../middlewares/auth'));
const validateRequest_1 = __importDefault(
  require('../../middlewares/validateRequest'),
);
const car_controller_1 = require('./car.controller');
const car_validation_1 = require('./car.validation');
const router = express_1.default.Router();
router
  .route('/')
  .get(car_controller_1.getAllCars)
  .post(
    (0, auth_1.default)('admin'),
    (0, validateRequest_1.default)(car_validation_1.createCarValidationSchema),
    car_controller_1.createCar,
  );
router.patch(
  '/return',
  (0, auth_1.default)('admin'),
  car_controller_1.returnCar,
);
router
  .route('/:id')
  .get(car_controller_1.getCar)
  .patch(
    (0, auth_1.default)('admin'),
    (0, validateRequest_1.default)(car_validation_1.updateCarValidationSchema),
    car_controller_1.updateCar,
  )
  .delete((0, auth_1.default)('admin'), car_controller_1.deleteCar);
exports.CarRoutes = router;
