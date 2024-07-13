"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductValidationSchema = exports.createProductValidationSchema = void 0;
const zod_1 = require("zod");
exports.createProductValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        price: zod_1.z.number().positive('Price must be a positive number'),
        stock: zod_1.z.number().int().nonnegative('Stock must be a non-negative integer'),
        description: zod_1.z.string(),
        category: zod_1.z.string(),
        ratings: zod_1.z.number().min(0).max(5, 'Ratings must be between 0 and 5'),
        images: zod_1.z
            .array(zod_1.z.string().url('Each image must be a valid URL'))
            .nonempty('At least one image is required'),
    }),
});
exports.updateProductValidationSchema = zod_1.z.object({
    body: zod_1.z
        .object({
        name: zod_1.z.string(),
        price: zod_1.z.number().positive('Price must be a positive number'),
        stock: zod_1.z
            .number()
            .int()
            .nonnegative('Stock must be a non-negative integer'),
        description: zod_1.z.string(),
        category: zod_1.z.string(),
        ratings: zod_1.z.number().min(0).max(5, 'Ratings must be between 0 and 5'),
        images: zod_1.z
            .array(zod_1.z.string().url('Each image must be a valid URL'))
            .nonempty('At least one image is required'),
    })
        .partial(),
});
