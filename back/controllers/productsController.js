const producto=require("../models/productos")

exports.getProducts=(req,res,next) =>{
  res.status(200).json({
    success:true,
    message: "Aqui podra ver todos los productos"
  })
}

//Crear nuevo producto /api/productos
exports.newProduct=async(req,res,next)=>{
    const product= await producto.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}

//Borrar productos por id
exports.deleteProduct=async(req, res, next)=>{
  const deleteProduct = await producto.findById (req.params.id);
  if(!deleteProduct){
    return res.status(404).json({
      success: false,
      mensaje: "El producto que intenta eliminar no existe."
    })
  }
  await deleteProduct.remove();
    res.status(200).json({
      success: true,
      mensaje: "Eliminación exitosa. Los datos del producto elimiado son: ",
      deleteProduct
})
}

