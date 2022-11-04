const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const producto = require("../models/productos");
const ErrorHandler = require("../utils/errorHandler");

//Ver la lista de productos
exports.getProducts =catchAsyncErrors( async (req, res, next) => {
  const productos = await producto.find();
  if (!productos) {
    return next(new ErrorHandler("Producto no encontrado", 404))
  }

  res.status(200).json({
    success: true,
    cantidad: productos.length,
    productos
  })
})

//Ver un producto por ID
exports.getProductById = catchAsyncErrors( async (req, res, next) => {
  const product = await producto.findById(req.params.id)

  if (!product) {
    return next(new ErrorHandler("Producto no encontrado", 404))
  }

  res.status(200).json({
    success: true,
    message: "Aqui debajo encuentras información sobre tu producto: ",
    product
  })
})

//Actualizar un producto
exports.updateProduct= catchAsyncErrors(async (req,res,next) =>{
  let product= await producto.findById(req.params.id) 
  if (!product){
      return next(new ErrorHandler("Producto no encontrado", 404))
  }
  
  //Si el objeto si existia, entonces si ejecuto la actualización
  product= await producto.findByIdAndUpdate(req.params.id, req.body, {
      new:true, //Valido solo los atributos nuevos o actualizados
      runValidators:true
  });
  //Respondo Ok si el producto si se actualizó
  res.status(200).json({
      success:true,
      message:"Producto actualizado correctamente",
      product
  })
})

//Crear nuevo producto /api/productos
exports.newProduct = catchAsyncErrors( async (req, res, next) => {
    const product = await producto.create(req.body);

    res.status(201).json({
      success: true,
      product
    })
  })

//Borrar productos por id
exports.deleteProduct = catchAsyncErrors (async (req, res, next) => {
    const product= await producto.findById(req.params.id)
    
    if (!product){
      return next(new ErrorHandler("Producto no encontrado", 404))
    
    }
    await product.remove();
    res.status(200).json({
      success: true,
      mensaje: "Eliminación exitosa. Los datos del producto elimiado son: "
    
    })
  })

// FETCH
//Ver todos los productos
function verProductos(){
  fetch('http://localhost:4000/api/productos')
  .then(res=>res.json())
  .then(res=>console.log(res))
  .catch(err=>console.error(err))
}

//verProductos(); LLamamos al metodo creado para probar la consulta

//Ver por id
function verProductoPorID(id){
  fetch('http://localhost:4000/api/producto/'+id)
  .then(res=>res.json())
  .then(res=>console.log(res))
  .catch(err=>console.error(err))
}
