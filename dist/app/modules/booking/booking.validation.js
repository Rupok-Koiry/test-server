"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookingValidationSchema = exports.createBookingValidationSchema = void 0;
const zod_1 = require("zod");
exports.createBookingValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        date: zod_1.z.string(),
        carId: zod_1.z.string(),
        startTime: zod_1.z.string().regex(/^\d{2}:\d{2}$/),
    }),
});
exports.updateBookingValidationSchema = zod_1.z.object({
    body: zod_1.z
        .object({
        date: zod_1.z.string(),
        user: zod_1.z.string(),
        car: zod_1.z.string(),
        startTime: zod_1.z.string().regex(/^\d{2}:\d{2}$/),
        endTime: zod_1.z
            .string()
            .regex(/^\d{2}:\d{2}$/)
            .nullable(),
        totalCost: zod_1.z.number(),
    })
        .partial(),
});
