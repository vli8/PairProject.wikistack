const express = require ('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const layout = require('./views/layout.js');
const app = express();

app.use(morgan('dev'));//logging every req res
app.use(express.static('/public'));//making file available 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));//convert the body content input into object useable in js

app.get("/", (req,res,next)=>{
    res.send(layout(''));
});


app.listen(3000);
