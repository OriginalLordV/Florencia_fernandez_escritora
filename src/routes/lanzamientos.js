const express = require("express");
const router = express.Router();



router.get("/lanzamientos", (req,res)=>{
    res.render("lanzamientos");
});

module.exports = router;