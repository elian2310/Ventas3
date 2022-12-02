import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

/* CONEXION CON MySQL
SI NO JALA USAR: user: 'root'@'localost'
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"dbhosp"
})*/

app.use(express.json())
app.use(cors())

/* EJEMPLO QUERY GET
app.get("/productos", (req, res) => {
    const query = "SELECT * FROM producto"
    db.query(query,(err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})
*/
// EJEMPLO QUERY POST
/*pp.post("/productos", (req, res) => {
    const query = "INSERT INTO producto (`nombre`,`precio`) VALUES (?)";
    const values = [
        req.body.nombre,
        req.body.precio,
    ];

    db.query(query, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Producto agregado correctamente");
    });
})*/


app.get("/", (req, res) => {
    res.json("Bomba Loko")
})

app.listen(8800, () => {
    console.log("Connected to backend!")
})