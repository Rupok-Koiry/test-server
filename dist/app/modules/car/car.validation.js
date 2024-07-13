"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCarValidationSchema = exports.createCarValidationSchema = void 0;
const zod_1 = require("zod");
exports.createCarValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        description: zod_1.z.string(),
        color: zod_1.z.string(),
        isElectric: zod_1.z.boolean(),
        status: zod_1.z
            .enum(['available', 'unavailable'])
            .optional()
            .default('available'),
        features: zod_1.z.array(zod_1.z.string()).optional().default([]),
        pricePerHour: zod_1.z.number(),
        isDeleted: zod_1.z.boolean().optional().default(false),
    }),
});
exports.updateCarValidationSchema = zod_1.z.object({
    body: zod_1.z
        .object({
        name: zod_1.z.string(),
        description: zod_1.z.string(),
        color: zod_1.z.string(),
        isElectric: zod_1.z.boolean(),
        status: zod_1.z.enum(['available', 'unavailable']),
        features: zod_1.z.array(zod_1.z.string()),
        pricePerHour: zod_1.z.number(),
        isDeleted: zod_1.z.boolean(),
    })
        .partial(),
});
