const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
        port: 3307,
        host: 'localhost',
        user: 'user1',
        password: 'mysql',
        database: 'wypozyczalnia_samochodow',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    console.log("Działa");
    res.json({});
});

app.post("/api/insert", (req, res) => {

    const imie = req.body.imie
    const nazwisko = req.body.nazwisko

    const sqlInsert = 
    "INSERT INTO klienci (imie, nazwisko) VALUES (?,?)";
    db.query(sqlInsert, [imie, nazwisko], (err, result) => {
        console.log(err);
    });
    });

app.listen(8002, () => {
    console.log("Serwer działa na http://localhost:8002/");  
});