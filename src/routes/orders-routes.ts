import { Router } from "express";
import { OrdersController } from "@/controllers/orders-controller";

const ordersRouters = Router();
const ordersController = new OrdersController();

ordersRouters.post("/", ordersController.create);

export { ordersRouters };
