const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root1234!',
    database: 'ice_cream_DB'
});

db.connect();

app.get('/', (req, res) => {
    res.send('Go to all /flavors')
});

//get all product
app.get('/flavors', (req, res) => {
    const sql = 'SELECT * FROM flavors';

    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result);
    });
});

//add
app.get('/flavors/add', (req, res) => {
    const {type, price} = req.query;

const sql = `INSERT INTO flavors(type, price) VALUES('${type}', ${price})`;
//http://localhost:5000/flavors/add?type=pea&price=1
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result);
    });
    
});


app.listen(5000, () => console.log('Server started'));