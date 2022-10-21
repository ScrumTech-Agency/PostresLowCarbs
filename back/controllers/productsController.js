exports.getProducts=(req,res,next) =>{
  res.status(200).json({
    success:true,
    message: "Aqui podra ver todos los productos"
  })
}
