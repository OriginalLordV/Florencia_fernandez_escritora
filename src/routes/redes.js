const express = require("express");
const router = express.Router();



router.get("/redes", (req,res)=>{
    res.render("redes");
});

module.exports = router;