"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_routes_1 = require("../modules/product/product.routes");
const category_routes_1 = require("../modules/category/category.routes");
const order_route_1 = require("../modules/order/order.route");
const router = (0, express_1.Router)();
// Define the routes for each module
const moduleRoutes = [
    {
        path: '/products',
        route: product_routes_1.ProductRoutes,
    },
    {
        path: '/orders',
        route: order_route_1.OrderRoutes,
    },
    {
        path: '/categories',
        route: category_routes_1.CategoryRoutes,
    },
];
// Register each module route with the router
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
