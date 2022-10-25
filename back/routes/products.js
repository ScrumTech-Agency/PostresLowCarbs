const express=require("express")
const router=express.Router();

const {getProducts, newProduct, deleteProduct} = require("../controllers/productsController") //Traemos la respuesta json desde el controlador
router.route('/productos').get(getProducts) //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(newProduct);
router.route('/producto/delete/:id').delete(deleteProduct);


module.exports=router;
