const express = require("express");
const router = express.Router();

router.get("/", (req,res,next)=> {
    res.render("DG");
})

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
    res.render("Contacto");
});


module.exports = router;