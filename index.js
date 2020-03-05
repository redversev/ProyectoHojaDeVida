const express = require('express');
const path = require('path');
const app = express();
const files = path.join(__dirname, '/views');
app.use( express.static (path.join(__dirname, '/public')))

console.log("--->", files);

app.get('/', (req, res)=>{
    res.sendFile(`${files}/index.html`);
});

app.route('/experiencia').get( (req, res)=>{
    res.sendFile(`${files}/experiencia.html`);
})

app.route('/estudios').get( (req, res)=>{
    res.sendFile(`${files}/estudios.html`);
})

app.route('/referencias').get( (req, res)=>{
    res.sendFile(`${files}/referencias.html`);
})

app.route('/contacto').get( (req, res)=>{
    res.sendFile(`${files}/contacto.html`);
})

app.route('/respuesta-formulario').get((req, res)=>{
    if (req.query.nombre ==='' || req.query.telefono==='' || req.query.comentarios==='') {
        res.sendFile(`${files}/error.html`)
        
    }else{
        res.sendFile(`${files}/envio-exitoso.html`)
    }
    let nombre = req.query.nombre
})

app.listen(4200);