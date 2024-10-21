
import { Router } from "express"
import { listProducts } from "./productsController"

//Product Endpoints
const router = Router()

router.get('/' ,listProducts )

export default router;