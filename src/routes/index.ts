import { Router } from "express";
import { productsRoutes } from "./products-routes";
import { tablesRouters } from "./tables-routes";
import { tablesSessionsRoutes } from "./tables-sessions-routes";
import { ordersRouters } from "./orders-routes";

const routes = Router();
routes.use("/products", productsRoutes);
routes.use("/tables", tablesRouters);
routes.use("/tables-sessions", tablesSessionsRoutes)
routes.use("/orders", ordersRouters)

export { routes };
