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

app.get("/api/get1", (req, res) => {

    const sqlSelect1 = 
    "SELECT * FROM wypozyczenia";
    db.query(sqlSelect1, (err, result) => {
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

    app.post("/api/insert1", (req, res) => {

        const cena = req.body.cena
        const data_wypozyczenia = req.body.data_wypozyczenia
        const data_zwrotu = req.body.data_zwrotu
        const okres_wypozyczenia = req.body.okres_wypozyczenia
    
        const sqlInsert1 = 
        "INSERT INTO wypozyczenia (cena, data_wypozyczenia, data_zwrotu, okres_wypozyczenia) VALUES (?,?,?,?)";
        db.query(sqlInsert1, [cena, data_wypozyczenia, data_zwrotu, okres_wypozyczenia], (err, result) => {
            console.log(result);
        });
        });



app.listen(8002, () => {
    console.log("Serwer działa na http://localhost:8002/");  
});