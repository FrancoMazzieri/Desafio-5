import { Router } from "express";
import { ProductManager } from "../controllers/ProductManager.js"

const viewsRouter = Router()

const productManager = new ProductManager

viewsRouter.get('/products', async (req, res)=>{
    try {
        const productos = await productManager.getProducts()
        let datos = {
            productos
        }
        
        res.render('home', datos)
    } catch (error) {
        console.log(error)
    }
    
})

viewsRouter.get('/realtimeproducts', (req, res)=>{
    res.render('realTimeProducts')
})

export default viewsRouter