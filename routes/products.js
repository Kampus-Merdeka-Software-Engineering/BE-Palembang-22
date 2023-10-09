import { Router } from "express"
import { getProducts, postProducts } from "../controllers/products.js";

const productRouter = Router();

productRouter.get('/:asal/:tujuan', getProducts);

productRouter.post('/', postProducts);

export default productRouter;