const express = require('express');
const app = express();
const path = require("path");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname , "./src/views"));

//app.use(express.static("src/cliente"));


app.set('port',(process.env.PORT || 3000));
app.use (express.static(path.join(__dirname, 'src')));

app.get('/', function(req,res, next){
    res.render('index.ejs');
});


app.use(require("./src/routes/tienda"));
app.use(require("./src/routes/lanzamientos"));
app.use(require("./src/routes/redes"));



app.get('/tienda', function(req,res, next){
    res.render(__dirname , '');
});

app.get('/lanzamientos', function(res, req) {
    res.render(__dirname, "");
});

app.get('/redes', function(req,res, next){
    res.render(__dirname , '');
});

app.listen(app.get('port'),()=>{
    console.log('active server');
});

