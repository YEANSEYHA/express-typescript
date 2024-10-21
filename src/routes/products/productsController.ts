import { Request, Response } from "express"
export function listProducts(req: Request, res: Response){
    res.send("The list of product 123")
}
