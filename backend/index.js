import express from "express"
import mysql from "mysql"
import cors from "cors"
import fetch from "node-fetch"
import bodyParser from "body-parser"
// Importando reqs
//const DBConnector = require('./src/dbconnector.js');
//const { query } = require('./src/dbconnector.js');

//Seteando puerto local
//const port = process.env.PORT || 8484;

//Inicializando las apps
const app = express();
const router = express.Router();

//Prepara la app
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
//app.use(cors());

// Seteo Ruta principal
app.use('/',router);

//Configurando rutas
router.route('/').get((req,res)=>{
    res.json("Nuestra API esta funcionando")
});
router.route('/users').get(async(req,res)=>{
    result = await DBConnector.query("SELECT * FROM Usuario")
    res.json(result);
});

router.route('/users/:id').get(async(req,res)=>{
    result = await DBConnector.queryWithParams("SELECT * FROM Usuario WHERE id=?", [req.params.id])
    res.json(result);
});

// Inicio de la app
//app.listen(port);

//Muestro puerto iniciado en consola
//console.log("Inicio en el puerto "+ port);

/* CONEXION CON MySQL
SI NO JALA USAR: user: 'root'@'localost'
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"dbhosp"
}) */

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

app.get("/datosfactura", (req, res) => {
    var datareq = req.query.codigo
    const currDate = new Date()
    return res.json({
        nitEmisor: "9448270",
        fecha: currDate,
        sucursal: "1",
        control: "123456" + datareq,
        cuf: "1234ABCD"
    })
})


// EJEMPLO QUERY POST
/* app.post("/productos", (req, res) => {
    const query = "INSERT INTO producto (`nombre`,`precio`) VALUES (?)";
    const values = [
        req.body.nombre,
        req.body.precio,
    ];

    db.query(query, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Producto agregado correctamente");
    });
}) */



app.get("/", (req, res) => {
    res.json("Bomba Loko")
})

app.listen(8800, () => {
    console.log("Connected to backend!")
})