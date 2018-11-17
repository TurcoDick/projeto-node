
// agora quem toma conta das rotas é o express
let express = require('express');

// é o consign quem vai gerenciar as rotas agora
let consign = require("consign");

// o modo de utilizar o body-parser é diferente de outros modulos por que ele é um middleware
let bodyParser = require("body-parser");

// é o modulo express-validator quem cuida de varias rotinas de validação
let expressValidator = require('express-validator');

// para poder acessar os modulos do express tenho que fazer assim
let app = express();

// para que o express consiga trabalhar em conjunto com o ejs devo mudar a tabela de propriedade do express
// a propriedade em questão é
app.set('view engine','ejs');

// para dizer para o express qual é o diretorio onde se encontram minhas views faço assim
app.set('views','./app/views');

// é assim que se faz a referenciação de arquivos que vão rodar do lado do cliente
app.use(express.static("./app/public"));

// um middleware é preciso parametrizar como o formulario será tratado
app.use(bodyParser.urlencoded({extended:true}));

// este cara esta em deprecated
app.use(expressValidator());

// acho sensato a configuração do servidor ficar no arquivo server
app.listen(3000, function () {
    // para chamar a mensagem do modulo eu devo colocar parenteses na variavel
    console.log("Servidor ON");
});

// desta forma o consign reconhece todos os arquivos da pasta
// routes e inclui esses modulos dentro do modulo express (app)
consign()
    .include('/app/routes')
    // consign executa o que o modulo exporta, no caso o diretório config, mas só o config é muito ruim, pois se fizer isso
    // entraremos em um loop uma vez que ja estamos dentro do diretório config
    //.then('config')

    // então devemos especificar o modulo correto, passando até a extensão
    .then('/config/datasource.js')

    // controlando o diretório app/models
    //.then("app/models")
    .then("app/controllers")
    .into(app);

// para dizer o que este modulo deve exportar para outro lugar devo fazer isso aqui
module.exports = app;

app.listen('3001', () => {
    console.log("Servidor de pé na porta 3001")
});
