const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")

const usuarioSchema = new mongoose.Schema({
  nombre: {
      type: String,
      required: [true, "Por favor ingrese su nombre"],
      maxlength: [120, "El nombre no puede exceder los 120 caracteres"]
  },
  email: {
      type: String,
      required: [true, "Por favor ingrese su correo electronico"],
      unique: true,
      validate: [validator.isEmail, "Por favor ingrese un email valido"]
  },
  password: {
      type: String,
      required: [true, "Por favor registre una contraseña nueva"],
      minlength: [8, "Su contraseña no puede tener menos de 8 caracteres"],
      select: false
  },
  avatar: {
      public_id: {
          type: String,
          required: true
      },
      url: {
          type: String,
          required: true
      }
  },
  role: {
      type: String,
      default: 'user'
  },
  fechaRegistro: {
      type: Date,
      default: Date.now
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date
})
module.exports = mongoose.model("auth", usuarioSchema)
