module.exports.retornaUsuarios = (application, response) =>{
    let connection = application.config.dbConnection();
    let usuarioModel = new application.app.models.UsuarioDAO(connection);

    usuarioModel.getUsuarios( function (error, result) {
        response.render("usuario/listaUsuario", {usuarios: result});
    });
};

module.exports.delete = (application, request, response)=>{
    let usuario = request.body;
    response.send(request.body);
    let connection = application.config.dbConnection();
    let usuarioModel = new application.app.models.UsuarioDAO(connection);

    usuarioModel.deleteUsuario(request, (error, result) =>{
        response.render("usuario/listaUsuario", {usuarios: result});
    });
};


module.exports.formulario_inclusao_usuario = (application, require, response)=>{
    response.render("cadastro/cadastroUsuario",{validacao:{}});
};

module.exports.salvar = (application, request, response) =>{

    let usuario = request.body;
    let connection = application.config.dbConnection();
    let usuarioModel = new application.app.models.UsuarioDAO(connection);


    usuarioModel.insereUsuario(usuario ,function (error, result) {
        response.render("usuario/listaUsuario",{usuarios: result});
    });

};