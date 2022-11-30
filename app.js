const { request, response } = require('express');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(express.json());

const port = 8080;

app.get('/',(request, response)=>{
    return response.json({message:'Server is ap'});
})

app.get('/user',(request, response)=>{
    return response.json(
        {"nome": "Usuário 1",
         "Curso": "TSI",
         "Materia": "Sistemas Distribuidos",
    });
})

app.listen(port, () => {
    console.log('Servidor Iniciado')
})