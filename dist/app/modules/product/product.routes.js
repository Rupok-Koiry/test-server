"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const product_controller_1 = require("./product.controller");
const product_validation_1 = require("./product.validation");
const router = express_1.default.Router();
router
    .route('/')
    .get(product_controller_1.getAllProducts)
    .post((0, validateRequest_1.default)(product_validation_1.createProductValidationSchema), product_controller_1.createProduct);
router
    .route('/:id')
    .get(product_controller_1.getProduct)
    .patch((0, validateRequest_1.default)(product_validation_1.updateProductValidationSchema), product_controller_1.updateProduct)
    .delete(product_controller_1.deleteProduct);
exports.ProductRoutes = router;
