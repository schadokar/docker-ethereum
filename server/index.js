const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const contractAPIRoutes = require("./routes/contract-API");
const smartContractAPIRoutes = require("./routes/smart-contract-API");

const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        limit:"50mb",
        extended:false,
        parameterLimit:50000    
    })
);

// use static file
app.use(express.static('public'));

// set the template engine
app.set('view engine', 'ejs');

// use the routes specified in route folder
app.use("/", contractAPIRoutes);
app.use("/",smartContractAPIRoutes);


app.use(function(err, req,res, next){
    res.status(422).send({error: err.message});
});

//listen to the server
app.listen( port, function(){
    console.log(`Listening to the port ${port} .....`);
});