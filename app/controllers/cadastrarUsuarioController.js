module.exports.formulario_inclusao_usuario = (application, require, response)=>{
    response.render("cadastro/cadastroUsuario",{validacao:{}});
};

module.exports.create = (application, request, response) =>{
    const datasource = require('../../config/datasource');
    const Usuario = datasource.usuario;

    Usuario.create({
        nome: request.body.nome,
        foto: request.body.foto,
        password: request.body.password,
        email: request.body.email
    }).then(usuarios =>{
        //application.app.controllers.listaUsuariosController.retornaUsuarios(usuario, response);
        response.redirect("listaUsuario",{usuarios})
    });
};
