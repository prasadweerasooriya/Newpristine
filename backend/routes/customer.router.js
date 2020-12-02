var express = require('express');
var router = express.Router();
var connection = require('../Config/Dbconfig');

router.post('/customer', async function (req, res, next){
    const customer = JSON.stringify(req.body);
    const newCumer = JSON.parse(customer)
    

    try {
        
            connection.query('INSERT INTO customer (firstname,lastname,email,address,city,state,zipcode,phone,mobile,birthday) values (?,?,?,?,?,?,?,?,?,?)', [newCumer.firstname, newCumer.lastname, newCumer.email, newCumer.address, newCumer.city, newCumer.state,newCumer.zipcode,newCumer.phone,newCumer.mobile,newCumer.birthday], function (error, results, fields) {
                
                if (error) {
                    res.send({
                        "code": 400,
                        "failed": "error ocurred"
                    })
                } else {
                    res.send({
                        "code": 200,
                        "success": "customer registered sucessfully"
                    });
                }
            })
        
    } catch (error) {

    }
})

router.get('/customerlist', function (req, res, next){

    connection.query('SELECT idcustomer,firstname,lastname,email,mobile,city FROM customer',(error, results) => {

        if (error) {
            res.send({
                "data": results,
                "code": 400,
                "failed": "error"
            });
        } else {
            res.send({
                "data": results,
                "code": 200,
                "success": "Customer view sucessfully"
            });
        }
    });

});

router.get('/allcustomerlist', function (req, res, next){

    connection.query('SELECT * FROM customer',(error, results) => {

        if (error) {
            res.send({
                "data": results,
                "code": 400,
                "failed": "error"
            });
        } else {
            res.send({
                "data": results,
                "code": 200,
                "success": "Customer view sucessfully"
            });
        }
    });

});

router.get('/viewCustomer/:idcustomer', function (req, res, next){

    connection.query('SELECT * FROM customer where idcustomer='+req.params.idcustomer,(error, results) => {

        if (error) {
            res.send({
                "data": results,
                "code": 400,
                "failed": "error"
            });
        } else {
            res.send({
                "data": results,
                "code": 200,
                "success": "Customer view sucessfully"
            });
        }
	})
});

router.delete('/deleteCustomer/:idcustomer', function (req, res, next){

    connection.query('DELETE  FROM customer where idcustomer='+req.params.idcustomer,(error, results) => {

        if (error) {
            res.send({
                "data": results,
                "code": 400,
                "failed": "error"
            });
        } else {
            res.send({
                "data": results,
                "code": 200,
                "success": "Customer delete sucessfully"
            });
        }
	})
});

module.exports = router;