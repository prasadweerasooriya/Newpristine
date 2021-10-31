const express = require('express');
const app = express();
const PORT = 4000;
const cors = require('cors');
const customerRouter=require('./routes/customer.router');

//enable all cors requests
app.use(cors());

//Bodyparser middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.text());

//routes
app.use('/',customerRouter);

app.listen(PORT, () => console.log('server is running on port:',PORT));