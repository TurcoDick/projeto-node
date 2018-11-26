
module.exports.index = (application, request, response) => {
    let connection = application.config.dbConnection();
    let usuarioModel = new application.app.models.UsuarioDAO(connection);

    usuarioModel.getUsuarios(function (error, result) {
        response.render("home/index", {usuarios:result, validacao:{}, assuntos:{}});
    });
};

module.exports.autenticar = (application, request, response) => {
    let connection = application.config.dbConnection();
    let usuarioModel = new application.app.models.UsuarioDAO(connection);
    let dadosForm = request.body;

    usuarioModel.getUsuario(dadosForm.email, dadosForm.password,request, response, (error, result)=>{
        if(error){
            console.log("Erro: ", error);
            console.error("Usuario não autenticado");
            request.redirect('/');
            return;
        }else if(result.length > 0){
            request.session.autorizado = true;
            application.app.controllers.usuario.usuarioController.retornaUsuarios(application, response);
        }else{
            request.session.autorizado = false;
        }

        if(request.session.autorizado){
            console.log("AUTORIZADO")
        }

    });
};