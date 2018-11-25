module.exports.delete = (application, request, response)=>{
    let usuario = request.body;
    response.send(request.body);
    let connection = application.config.dbConnection();
    let usuarioModel = new application.app.models.UsuarioDAO(connection);

    usuarioModel.deleteUsuario(request, (error, result) =>{
        response.render("usuario/listaUsuario", {usuarios: result});
    });
};