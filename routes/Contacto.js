const express = require("express");
const router = express.Router();
const ContactoModel = require('../models/ContactoModel');

router.get("/", (req,res,next)=> {
    res.render("Contacto");
});

router.get("/", (req,res,next)=> {
    res.render("Admin");
});

router.get("/", (req,res,next)=> {
    res.render("Ilustracion");
});

router.get("/", (req,res,next)=> {
    res.render("DI");
});

router.get("/", (req,res,next)=> {
    res.render("DG");
});

router.post('/',async (req,res,next)=> {
    let objMsg = {

        correo : req.body.correo,
        comentario : req.body.comentario
    }
    let respuesta = await ContactoModel.main(objMsg);

    if(respuesta) {

        res.render('contacto', {status : true,message : 'Correo enviado! en breve nos contactaremos :)'})
    } 
});

module.exports = router;