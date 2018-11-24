
module.exports.index = (application, request, response) => {
    let connection = application.config.dbConnection();
    let usuarioModel = new application.app.models.UsuarioModel(connection);

    usuarioModel.getUsuarios(function (error, result) {
        response.render("usuario/listaUsuario", {usuarios:result});
    });
};

module.exports.autenticar = (application, request, response) => {
    let connection = application.config.dbConnection;
    let usuarioModel = new application.app.models.UsuarioModel(connection);

    let dadosForm = request.body;
    let password = dadosForm.password;

    request.assert("email", "E-mail esta vazio").notEmpty();
    request.assert("password","Senha esta vazia").notEmpty();
    request.assert("password","A senha tem que ter mais de 8 carácteres").len(8);

    let erros = request.validationErrors();

    if(erros){
        response.render("home/index", {validacao: erros, assuntos: {}});
        return;
    }

    usuarioModel.getUsurio(dadosForm.email, dadosForm.password, (error, result)=>{
        console.log("RESULT: " +result);
        console.log("ERRO: " + error);
        console.log("EMAIL: " + dadosForm.email)
        console.log("PASSWORD: "+ dadosForm.password);
        response.render("usuario/listaUsuario", {usuario: result});
    });


    console.log("Aquiiiii => "+ dadosForm);
    response.send("Tudo ok para criar sessão");

};