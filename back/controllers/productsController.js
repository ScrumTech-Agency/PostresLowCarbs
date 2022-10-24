exports.getProducts=(req,res,next) =>{
  res.status(200).json({
    success:true,
    message: "Aqui podra ver todos los productos"
  })
}

//Actualizar un producto
exports.updateProduct= async(req,res,next) =>{
  let product = await producto.findById(req.params.id);
  if (!product){
      return res.status(404).json({
          success:false,
          message: "No se encontró el producto"
      })
  } 
  // Si existe el objeto, entonces se ejecuta la actualizacion
  product = await producto.findByIdAndUpdate(req.params.id, req.body, {
      new: true, //Valido solo los atributos nuevos o actualizacion
      runValidators: true
  });

  //Respondo OK si el producto se actualizó
  res.status(200).json({
      success: true,
      message: "Producto actualizado exitosamente",
      product
})
}
