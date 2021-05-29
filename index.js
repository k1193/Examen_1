const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
 let port = 3700;



app.get('/', (req, res) => {
    res.sendFile(path.join (__dirname + '/index.html'));
});
app.get('/contactenos', (req, res) => {
    res.sendFile(path.join (__dirname + '/contactenos.html'));
});
 

app.post('/usuarios', (req, res) => {
    let nombre = req.body.nombre;
    let email = req.body.email;
    let comentarios = req.body.comentario;
    res.send(`Cliente insertado completamente${nombre}`);
});


app.put('/editar', (req, res) => {
    let nombre = req.body.nombre;
    let email = req.body.email;
    let comentarios = req.body.comentario;
    res.send(`Cliente editado corrrectamente`);
});

app.eliminar('/eliminar', (req, res) => {
    let nombre = req.body.nombre;
    let email = req.body.email;
    let comentarios = req.body.comentario;
    res.send(`Cliente eliminado corrrectamente${nombre}`);
})


 app.listen(port,()=>{
    console.log(`el servidor esta en http://localhost:${port}`);
});