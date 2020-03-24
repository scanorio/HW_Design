
"use strict";
const nodemailer = require("nodemailer");

async function main(objeto) {
    try {

        let transporter = nodemailer.createTransport({
            
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          auth: {
            user: 'sofibelu.1@gmail.com',
            pass: 'quepajaja'
          },
        
          tls: {
              rejectUnauthorized : false
          }
        });
        let info = await transporter.sendMail({
          from: '"Fred Foo 👻" <foo@example.com>',
          to: 'sofibelu.1@gmail.com',
          subject: "Nuevo mail desde HW Design",
      
          html: "Tenés una nueva solicitud de contacto desde : " +objeto.correo + " que dice :<br> "+objeto.comentario 
        });
      
        return info.messageId;


    } catch(error) {
        console.log(error);
    }
}

module.exports = {main}