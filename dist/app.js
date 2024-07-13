"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Middleware for parsing JSON bodies
app.use(express_1.default.json());
// Middleware for parsing cookies
app.use((0, cookie_parser_1.default)());
// Middleware for enabling Cross-Origin Resource Sharing (CORS) for specified origins
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
