const express = require ('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

app.use(morgan('dev'));
app.use(express.static);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res,next)=>{
    res.send('hello world');
})


app.listen(3000);
