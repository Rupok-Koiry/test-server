"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderValidationSchema = exports.createOrderValidationSchema = void 0;
const zod_1 = require("zod");
exports.createOrderValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        user: zod_1.z.object({
            name: zod_1.z.string(),
            email: zod_1.z.string().email({ message: 'Invalid email address' }),
            phone: zod_1.z.string(),
            deliveryAddress: zod_1.z.string(),
        }),
        products: zod_1.z
            .array(zod_1.z.object({
            product: zod_1.z.string(),
            quantity: zod_1.z
                .number()
                .int()
                .positive({ message: 'Quantity must be a positive integer' }),
        }))
            .nonempty({ message: 'At least one product is required' }),
        totalAmount: zod_1.z
            .number()
            .positive({ message: 'Total amount must be a positive number' }),
        status: zod_1.z.enum(['pending', 'delivered', 'cancelled']).default('pending'),
    }),
});
exports.updateOrderValidationSchema = zod_1.z.object({
    body: zod_1.z
        .object({
        user: zod_1.z.object({
            name: zod_1.z.string(),
            email: zod_1.z.string().email({ message: 'Invalid email address' }),
            phone: zod_1.z.string(),
            deliveryAddress: zod_1.z.string(),
        }),
        products: zod_1.z.array(zod_1.z.object({
            product: zod_1.z.string(),
            quantity: zod_1.z
                .number()
                .int()
                .positive({ message: 'Quantity must be a positive integer' }),
        })),
        totalAmount: zod_1.z
            .number()
            .positive({ message: 'Total amount must be a positive number' }),
        status: zod_1.z.enum([
            'pending',
            'processed',
            'shipped',
            'delivered',
            'cancelled',
        ]),
    })
        .partial(),
});
