import express from 'express'
import productsRoutes from './routes/products/index'

const app = express();

const port = 3000;


app.get("/",(req,res) =>{
    res.send("Hello from express")
})




app.use('/products',productsRoutes)

app.listen(port,() =>{
    console.log(`Running server on port ${port}`)
})