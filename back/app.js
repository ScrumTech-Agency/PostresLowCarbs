const express=require("express");
const app = express();
const errorMiddleware= require("./middleware/errors")
const cookieParser= require("cookie-parser")
const bodyParser = require('body-parser') // para que el aplicativo muestre la foto en la parte superior
const fileUpload = require('express-fileupload') // para hacer cargas efectivas a traves del browser y que  lo mande al back



//uso de constantes importadas
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(cookieParser());
app.use(fileUpload());

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
