//chama librare
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())
//cria uma pagina e escreva a resposta
app.get('/', (request, response) => {
    response.send("aaa")
})

app.get('/teste', (request, response) => {
    response.send("aaaaaaaaaaaaaa")
})

//com obj
app.get('/teste/teste', (request, response) => {
    const noticia ={
        id: 1,
        texto: "blablabla",
        autor: "Eu mesmo"
    }
    response.send(noticia)
})

/*
{
    numero1: 2,
    numero2: 3
}
*/
app.post('/soma', (request, response) => {
    const body = request.body;
    const numero1 = body.numero1
    const numero2 = body.numero2
    const resultado = {
        resultado: numero1 + numero2
    }
    response.send(resultado)
})

//define a porta para iniciar servidor
app.listen(port, () => {
    console.log("Servidor iniciado na porta " +port)
})