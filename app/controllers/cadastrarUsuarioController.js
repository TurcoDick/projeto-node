module.exports.formulario_inclusao_usuario = (application, require, response)=>{
    response.render("cadastro/cadastroUsuario",{validacao:{}});
};

module.exports.salvar = (application, request, response) =>{
    let usuario = request.body;
    let connection = application.config.dbConnection();
    let usuarioModel = new application.app.models.UsuarioDAO(connection);

    usuarioModel.insereUsuario(usuario ,function (error, result) {
       console.log("RESULT: "+result);
       console.log("ERRO: "+error);

       response.redirect("/listaUsuario",{usuarios: result});
    });

};
