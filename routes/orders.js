import { Router } from "express";
import { getOrders, postOrders } from "../controllers/orders.js";



const ordersRouter = Router();

ordersRouter.get('/', getOrders);

ordersRouter.post('/', postOrders);

export default ordersRouter;