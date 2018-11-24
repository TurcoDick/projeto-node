module.exports.retornaUsuarios = (application, response) =>{
    let connection = application.config.dbConnection();
    let usuarioModel = new application.app.models.UsuarioDAO(connection);

    usuarioModel.getUsuarios( function (error, result) {
        response.render("usuario/listaUsuario", {usuarios: result});
    });
};