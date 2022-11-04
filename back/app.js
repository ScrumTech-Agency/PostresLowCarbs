const express=require("express");
const app = express();
const errorMiddleware= require("./middleware/errors")

app.use(express.json());

// importar rutas
const productos=require("./routes/products")

app.use('/api',productos) //ruta del navegador

//MiddleWares para manejar errores
app.use(errorMiddleware)


module.exports=app
