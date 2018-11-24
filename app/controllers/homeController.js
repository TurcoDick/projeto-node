
module.exports.index = (application, request, response) => {
    let connection = application.config.dbConnection();
    let usuarioModel = new application.app.models.UsuarioDAO(connection);

    usuarioModel.getUsuarios(function (error, result) {
        response.render("home/index", {usuarios:result, validacao:{}, assuntos:{}});
    });
};

module.exports.autenticar = (application, request, response) => {
    let connection = application.config.dbConnection;
    let usuarioModel = new application.app.models.UsuarioDAO(connection);

    let dadosForm = request.body;

    request.assert("email", "E-mail esta vazio").notEmpty();
    request.assert("password","Senha esta vazia").notEmpty();
    request.assert("password","A senha tem que ter mais de 8 carácteres").len(8);

    let erros = request.validationErrors();

    if(erros){
        response.render("home/index", {validacao: erros, assuntos: {}});
        return;
    }

    usuarioModel.getUsuario(dadosForm.email, dadosForm.password, (error, result)=>{
        //response.render("usuario/listaUsuario", {usuario: result});
        response.send("Passsoooouuu");
        if(error){
            console.log("Erro")
        }else{
            console.log("Passou")
        }
    });
};