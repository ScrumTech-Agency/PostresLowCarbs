const express=require("express")
const router=express.Router();


const {getProducts, newProduct, deleteProduct, getProductById, updateProduct } = require("../controllers/productsController"); //Traemos la respuesta json desde el controlador
const { isAuthenticatedUser, authorizeRoles} = require("../middleware/auth");



//Test Autenticaciones
router.route('/productos').get( getProducts) //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(isAuthenticatedUser,  authorizeRoles("admin"), newProduct);
router.route('/producto/delete/:id').delete(isAuthenticatedUser,  authorizeRoles("admin"),deleteProduct);
router.route('/producto/:id').get(getProductById); //Ruta para consultar por id
router.route('/producto/:id').put(isAuthenticatedUser,  authorizeRoles("admin"),updateProduct);//Creacion de la ruta de actualizacion



module.exports=router;
