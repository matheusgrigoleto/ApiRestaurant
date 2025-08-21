import { Router } from "express";
import { OrdersController } from "@/controllers/orders-controller";

const ordersRouters = Router();
const ordersController = new OrdersController();

ordersRouters.get("/table-session/:table_session_id", ordersController.index)
ordersRouters.post("/", ordersController.create);
ordersRouters.get("/table-session/:table_session_id/total", ordersController.show);

export { ordersRouters };
