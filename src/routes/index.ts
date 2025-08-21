import { Router } from "express";
import { productsRoutes } from "./products-routes";
import { tablesRouters } from "./tables-routes";

const routes = Router();
routes.use("/products", productsRoutes);
routes.use("/tables", tablesRouters);

export { routes };
