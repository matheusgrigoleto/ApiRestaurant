import { TablesController } from "@/controllers/tables-controller";
import { Router } from "express";

const tablesRouters = Router()
const tablesController = new TablesController()

tablesRouters.get("/", tablesController.index)

export { tablesRouters }