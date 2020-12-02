const express = require('express');
const app = express();
const PORT = 4000;
const cors = require('cors');
const bodyParser=require('body-parser');
const customerRouter=require('./routes/customer.router');


//enable all cors requests
app.use(cors());

//Bodyparser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routes
app.use('/',customerRouter);

app.use(require('body-parser').urlencoded({extended:false}));
app.use(require('body-parser').json());
app.use(require('body-parser').text());

app.listen(PORT, function(){
    console.log('server is running on port:',PORT);
});