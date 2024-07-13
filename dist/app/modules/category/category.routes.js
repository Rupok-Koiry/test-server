"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const category_controller_1 = require("./category.controller");
const category_validation_1 = require("./category.validation");
const router = express_1.default.Router();
router
    .route('/')
    .get(category_controller_1.getAllCategories)
    .post((0, validateRequest_1.default)(category_validation_1.createCategoryValidationSchema), category_controller_1.createCategory);
router
    .route('/:id')
    .get(category_controller_1.getCategory)
    .patch((0, validateRequest_1.default)(category_validation_1.updateCategoryValidationSchema), category_controller_1.updateCategory)
    .delete(category_controller_1.deleteCategory);
exports.CategoryRoutes = router;
