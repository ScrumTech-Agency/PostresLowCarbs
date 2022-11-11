const { json } = require("body-parser");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const producto = require("../models/productos");
const APIFeatures = require("../utils/apiFeatures");
const ErrorHandler = require("../utils/errorHandler");

//Ver la lista de productos
exports.getProducts = catchAsyncErrors(async (req, res, next) => {

  const resPerPage = 3;
  const productsCount = await producto.countDocuments();

  const apiFeatures = new APIFeatures(producto.find(), req.query)
    .search()
    .filter();

  let products = await apiFeatures.query;
  let filteredProductsCount = products.length;
  apiFeatures.pagination(resPerPage);
  products = await apiFeatures.query.clone();


  res.status(200).json({
    success: true,
    productsCount,
    resPerPage,
    filteredProductsCount,
    products
  })


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
exports.getProductById = catchAsyncErrors(async (req, res, next) => {
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
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await producto.findById(req.params.id)
  if (!product) {
    return next(new ErrorHandler("Producto no encontrado", 404))
  }

  //Si el objeto si existia, entonces si ejecuto la actualización
  product = await producto.findByIdAndUpdate(req.params.id, req.body, {
    new: true, //Valido solo los atributos nuevos o actualizados
    runValidators: true
  });
  //Respondo Ok si el producto si se actualizó
  res.status(200).json({
    success: true,
    message: "Producto actualizado correctamente",
    product
  })
})

//Crear nuevo producto /api/productos
exports.newProduct = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;
  const product = await producto.create(req.body);

  res.status(201).json({
    success: true,
    product
  })
})

//Borrar productos por id
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await producto.findById(req.params.id)

  if (!product) {
    return next(new ErrorHandler("Producto no encontrado", 404))

  }
  await product.remove();
  res.status(200).json({
    success: true,
    mensaje: "Eliminación exitosa. Los datos del producto elimiado son: "

  })
})

//creacion o Actualizar un review
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comentario, idProducto } = req.body;

  const opinion = {
    nombreCliente: req.user.nombre,
    rating: Number(rating),
    comentario
  }
  const product = await producto.findById(idProducto);
  const isReviewed = product.opiniones.find(item =>
    item.nombreCliente === req.user.nombre)

  if (isReviewed) {
    product.opiniones.forEach(opinion => {
      if (opinion.nombreCliente === req.user.nombre) {
        opinion.comentario = comentario,
          opinion.rating = rating

      }
    })

  } else {
    product.opiniones.push(opinion)
    product.numCalificaciones = product.opiniones.length

  }

  product.calificacion = product.opiniones.reduce((acc, opinion) =>
    opinion.rating = + acc, 0) / product.opiniones.length

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    message: "Ha opinado correctamente"


  })


})

//ver todos los review de un solo producto

exports.getProductsReviews = catchAsyncErrors(async (req, res, next) => {
  const product = await producto.findById(req.query.id)

  res.status(200).json({
    success: true,
    opiniones: product.opiniones

  })


})

//Metodo para eliminar review
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {

  const product = await producto.findById(req.query.idProducto);

  const opiniones = product.opiniones.filter(opinion =>
    opinion.id.toString() !== req.query.idReview.toString());

  const numCalificaciones = opiniones.length;

  const calificacion = product.opiniones.reduce((acc, Opinion) =>
    Opinion.rating + acc, 0) / opiniones.length

  await producto.findByIdAndUpdate(req.query.idProducto, {
    opiniones,
    calificacion,
    numCalificaciones

  }, {

    new: true,
    runValidators: true,
    useFindAndModify: false
  })
  req.status(200).json({
    success: true,
    message: "Review eliminada correctamente"

  })


})



// FETCH
//Ver todos los productos
function verProductos() {
  fetch('http://localhost:4000/api/productos')
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err))
}

//verProductos(); LLamamos al metodo creado para probar la consulta

//Ver por id
function verProductoPorID(id) {
  fetch('http://localhost:4000/api/producto/' + id)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err))
}
