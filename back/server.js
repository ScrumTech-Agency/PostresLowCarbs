const app=require("./app")
app.listen (process.env.PORT)

const dotenv=require("dotenv");

dotenv.config({path: 'back/config/config.env'})

// configurar  base de datos




const server=app.listen(process.env.PORT, () => {
  console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
  
}) 
