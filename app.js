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

app.get('/ip',(request, response)=>{
    const os = require('os');
    const networkInfo = os.networkInterfaces();
    const array = networkInfo.eth0[0].address
    const ip = JSON.stringify(array);
    
    
    return response.end(`IP DO SERVIDOR QUE ESTA RESPONDENDO: ${ip}`);
})

app.listen(port, () => {
    console.log('Servidor Iniciado')
})