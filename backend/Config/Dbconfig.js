const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'users',
    
});

db.connect((error) => {
    if(error){
        console.log(error)
  } else {
      console.log("MYSQL Connected...")
  }
});

module.exports= db;