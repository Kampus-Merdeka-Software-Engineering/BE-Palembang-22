import { Router } from "express";
import { getOrders, postOrders } from "../controllers/orders.js";



const ordersRouter = Router();

ordersRouter.get('/:resi', getOrders);

ordersRouter.post('/', postOrders);

export default ordersRouter;