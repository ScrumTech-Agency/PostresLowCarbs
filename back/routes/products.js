const express=require("express")
const router=express.Router();


const {getProducts, newProduct, deleteProduct, getProductById } = require("../controllers/productsController"); //Traemos la respuesta json desde el controlador
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


//Test Autenticaciones
router.route('/productos').get(isAuthenticatedUser, authorizeRoles("admin"), getProducts) //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(newProduct);
router.route('/producto/delete/:id').delete(deleteProduct);
router.route('/producto/:id').get(getProductById); //Ruta para consultar por id



module.exports=router;
