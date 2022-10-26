const express=require("express")
const router=express.Router();

<<<<<<< Updated upstream
const {getProducts, newProduct, deleteProduct} = require("../controllers/productsController") //Traemos la respuesta json desde el controlador
router.route('/productos').get(getProducts) //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(newProduct);
router.route('/producto/delete/:id').delete(deleteProduct);

=======
const {getProducts, newProduct, getProductById} = require("../controllers/productsController") //Traemos la respuesta json desde el controlador
router.route('/productos').get(getProducts) //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(newProduct);//Ruta Método post Establecemois la ruta
router.route('/producto/:id').get(getProductById); //Ruta para consultar por id
>>>>>>> Stashed changes

module.exports=router;
