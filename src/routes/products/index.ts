
import { Router } from "express"

//Product Endpoints
const router = Router()

router.get('/', (req,res) =>{
    res.send('List of pruductus')
})

export default router;