const express = require("express");
const router = express.Router();



router.get("/tienda", (req,res)=>{
    res.render("tienda");
});

module.exports = router;