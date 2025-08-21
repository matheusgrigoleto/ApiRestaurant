import { NextFunction, Request, Response } from "express"
import { AppError } from "@/utils/AppError"

class ProductsController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      return response.json({ message: "OK" })
    } catch (error) {
      next(error)
    }
  }
}

export { ProductsController }