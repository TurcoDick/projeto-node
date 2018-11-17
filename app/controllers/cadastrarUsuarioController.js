module.exports.formulario_inclusao_usuario = (application, require, response)=>{
    response.render("cadastro/cadastroUsuario");
};

module.exports.create = (request, response) =>{

    let datasource = require('../../config/datasource');

    let Usuario = datasource.usuario;

    Usuario.create({
        nome: request.body.nome,
        foto: request.body.foto
    }).then(usuario =>{
        response.send(usuario)
    });
};
