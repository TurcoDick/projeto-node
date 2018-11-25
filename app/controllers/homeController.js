
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


    usuarioModel.getUsuario(dadosForm.email, dadosForm.password, response, (error, result)=>{
        if(error){
            response.send(error);
        }else{
            response.send(result);
        }
    });
};