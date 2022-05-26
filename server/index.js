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
    res.json("Serwer działa");
});

app.get("/api/get", (req, res) => {

    const sqlSelect = 
    "SELECT * FROM klienci";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post("/api/insert", (req, res) => {

    const imie = req.body.imie
    const nazwisko = req.body.nazwisko
    const pesel = req.body.pesel
    const miejsce_zamieszkania = req.body.miejsce_zamieszkania
    const numer_telefonu = req.body.numer_telefonu

    const sqlInsert = 
    "INSERT INTO klienci (imie, nazwisko, pesel, miejsce_zamieszkania, numer_telefonu) VALUES (?,?,?,?,?)";
    db.query(sqlInsert, [imie, nazwisko, pesel, miejsce_zamieszkania, numer_telefonu], (err, result) => {
        console.log(result);
    });
    });

app.listen(8002, () => {
    console.log("Serwer działa na http://localhost:8002/");  
});