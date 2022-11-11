const express=require("express");
const app = express();
const errorMiddleware= require("./middleware/errors")
const cookieParser= require("cookie-parser")


//uso de constantes importadas
app.use(express.json());
app.use(cookieParser());

// importar rutas
const productos=require("./routes/products")
const usuarios=require("./routes/auth")
const ordenes=require("./routes/orders")
   //Maping ruta usuarios

app.use('/api',productos) //ruta del navegador
app.use('/api',usuarios)
app.use('/api',ordenes)
//MiddleWares para manejar errores
app.use(errorMiddleware)


module.exports=app
