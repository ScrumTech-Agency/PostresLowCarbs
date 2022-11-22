const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "6dbfcfcdb42b9e", //Usuario de correo
          pass: "932c4e7da3c15d" //contraseña de aplicación
        }
      });
    const mensaje={
        from: "Postres Low Carb <noreply@postreslowcarbs.com>", //correo usuario
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports= sendEmail;