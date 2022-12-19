import express from "express"
import mysql from "mysql"
import cors from "cors"
import fetch from "node-fetch"
import bodyParser from "body-parser"
import PDF from "pdfkit-construct"
import fs from "fs"
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
SI NO JALA USAR: user: 'root'@'localost' */
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"dbventas"
}) 

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

app.get("/getProductos", (req, res) => {
    const query = "SELECT * FROM producto"
    db.query(query, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.get("/getProductoByQR", (req, res) => {
    var codQR = req.query.CodigoQR
    const query = "SELECT * FROM producto";
    //console.log(query)
    db.query(query, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    }) 
})

app.get("/datosfactura", (req, res) => {
    var codreq = req.query.codigo
    var productos = req.query.carrito
    const quer = "SELECT NumFactura from factura ORDER BY NumFactura DESC LIMIT 1"
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;
    console.log(productos)
    var montoTotal = 0
    for (var i = 0; i < productos.length; i++){
        montoTotal = montoTotal + ( productos[i].Precio * productos[i].qty )
    }
    db.query(quer,(err,data) => {
        if(err) return res.json(err)
        var nrof = 1
        if(data.length > 0){
            nrof = data[0].NumFactura + 1
        }
        var gencuf = generarCuf(codreq, nrof).toString().substring(0,49)
        return res.json({
            nroFactura: nrof,
            cuf: gencuf,
            monto: montoTotal,
            qr: "1234567890",
            control: "A0-B1-C2-D3-E4",
            fecha: formattedToday
        })
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



app.get("/getFactura", (req, res) => {

    const productos = req.query.productos

    const queryCli = "SELECT NitCliente FROM cliente WHERE NitCliente = " + req.query.ci
    db.query(queryCli, (err, data) => {
        if(err) return res.json(err)
        if(data.length <= 0){
            const querInsCli = "INSERT INTO cliente (`NitCliente`,`RazonSocial`,`Direccion`,`Telefono`) VALUES (?)"
            const valuesCli = [
                req.query.ci,
                req.query.nombre,
                "Dirección desconocida",
                "7777777",
            ]
            db.query(querInsCli,[valuesCli],(err, data) => {
                if (err) console.log(err);
                console.log("Cliente nuevo creado")
            })
        }

    })

    const query1 = "INSERT INTO factura (`CUF`,`CodigoControl`,`MontoTotal`,`CodigoQR`,`NitCliente`) VALUES (?)";
    const values1 = [
        req.query.cuf,
        req.query.codigo,
        req.query.monto,
        req.query.qr,
        req.query.ci,
    ];
    
   

    db.query(query1, [values1], (err, data) => {
        if (err) console.log(err);
        console.log(data.insertId)
       
        for (var i = 0; i < productos.length; i++){
            var query2 = "INSERT INTO detallefacturacion (`CodigoQR`,`NumFactura`,`Cantidad`) VALUES (?)"
            var values2 = [
                productos[i].CodigoQR,
                data.insertId,
                productos[i].qty,
            ];
            db.query(query2, [values2] , (err,data2) => {
                if(err) console.log(err)
                console.log("detalle agregado")
            })
        }
        
    })

    

    
    

    const doc = new PDF({bufferPage: true})

    const filename = `Factura${Date.now()}.pdf`

    const stream = res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment;filename=${filename}`
    })
    doc.on('data', (data) => {
        stream.write(data)
    })
    doc.on('end', () => {stream.end()})
    doc.setDocumentHeader({
        height: '20%'
    },() => {
        doc.fontSize(15).text('FACTURA', {
            width: 420,
            align: 'center'
        })
        doc.fontSize(12)
        doc.text('NIT: 9448270', {
            width: 420,
            align: 'left'  
        })
        doc.text(`Sr(a): ${req.query.nombre}`, {
            width: 420,
            align: 'left'  
        })
        doc.text(`C.I.: ${req.query.ci}`, {
            width: 420,
            align: 'left'  
        })
        doc.text(`Fecha: ${req.query.fecha}`, {
            width: 420,
            align: 'left'  
        })


    })
    
    doc.addTable([
        {key: 'CodigoQR', label:'ID', align: 'left' },
        {key: 'NombreProducto', label:'Nombre', align: 'left' },
        {key: 'qty', label:'Cantidad', align: 'left' },
        {key: 'Precio', label:'Precio Unitario', align: 'left' }
        
    ], productos, {
        border: null,
        width: "fill_body",
        striped: true,
        stripedColors: ["#f6f6f6", "#d6c4dd"],
        cellsPadding: 20,
        marginLeft: 45,
        marginRight: 45,
        headAlign: 'center'
    })
    
    doc.render()
    doc.pipe(fs.createWriteStream('../client/src/factura.pdf'));
    doc.pipe(res)
    doc.end()
    
    
})

function generarCuf(codigo, nro){
    var nitEmisor = addZero("123456789",13)
    var fechaHora = addZero("20190113163721231",17)
    var sucursal = addZero("0",4)
    var modalidad = "1"
    var tipoEmision = "1"
    var tipoFactura = "1"
    var tipoDocumento = addZero("1",2)
    var pos = addZero("0",4)
    var codigostr = codigo.toString()
    var nrostr = addZero(nro.toString(),10)

    var concat1 = nitEmisor + fechaHora + sucursal + modalidad + tipoEmision + tipoFactura + tipoDocumento + nrostr + pos

    var concat2 = concat1 + (parseInt(concat1) % 11).toString()

    var concat3 = parseInt(concat2).toString(16) + codigostr

    return concat3

}
function addZero(text, num){
    while (text.length < num){
        text = "0" + text
    }
    return text
}




app.get("/", (req, res) => {
    res.json("Bomba Loko")
})

app.listen(8800, () => {
    console.log("Connected to backend!")
})