import product from "../models/product";

export const newProduct = async(req,res,next)=>{
    const newProduct = await product.create(req.body);
    res.status(200).json({
        product
    })
}