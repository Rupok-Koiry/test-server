"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpValidationSchema = exports.signInValidationSchema = void 0;
const zod_1 = require("zod");
exports.signInValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string(),
        password: zod_1.z.string(),
    }),
});
exports.signUpValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string(),
        password: zod_1.z.string(),
        name: zod_1.z.string(),
        role: zod_1.z.enum(['user', 'admin']),
        phone: zod_1.z.string(),
        address: zod_1.z.string(),
    }),
});
