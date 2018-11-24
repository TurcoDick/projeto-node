// const Sequelize = require('sequelize');
// const AssuntoModel = require('../app/models/model/AssuntoModel');
// const UsuarioModel = require('../app/models/model/UsuarioModel');
// const PerguntaModel = require('../app/models/model/PerguntaModel');
// const RespostaModel = require('../app/models/model/RespostaModel');
//
// const sequelize = new Sequelize('stackoverflow_node','usuario_simples','123',
//     {
//         host:'localhost',
//         dialect: 'mysql',
//         pool:{
//             max:15,
//             min:0,
//             acquire: 30000,
//             idle: 10000
//         }
//     });
//
// //crio um objeto Sequelize
// const usuario = UsuarioModel(sequelize, Sequelize);
// const assunto = AssuntoModel(sequelize, Sequelize);
// const pergunta = PerguntaModel(sequelize, Sequelize);
// const resposta = RespostaModel(sequelize, Sequelize);
//
// // esta é a tabela intermediaria para relações de muitos para muitos
// const usuario_assunto = sequelize.define('usuario_assunto',{});
// const assunto_pergunta = sequelize.define('assunto_pergunta',{});
//
// // Aqui se cria as relações entre as tabelas
// usuario.belongsToMany(assunto, {through: usuario_assunto, unique: false});
// assunto.belongsToMany(usuario, {through: usuario_assunto, unique: false});
// assunto.belongsToMany(pergunta, {through: assunto_pergunta, unique:false});
// pergunta.belongsToMany(assunto, {through:assunto_pergunta, unique:false});
// pergunta.hasMany(resposta, {});
//
//
// // o {force: true} destroi tudo e re-constroi
// //sequelize.sync({force: true}).then(() =>{console.log("Tabelas do banco de dados criado !!!")});
//
//
//
// module.exports = {
//     usuario,
//     assunto,
//     pergunta,
//     sequelize
// };
