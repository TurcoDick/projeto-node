
module.exports = (application) =>{
    application.get('/formulario_inclusao_usuario', function(request, response) {
        application.app.controllers.cadastrarUsuarioController.formulario_inclusao_usuario(application, request, response);
    });

    application.post('/formulario_inclusao_usuario/create', (request, response) => {

        request.assert("nome","Nome é obrigatório").notEmpty();
        request.assert("foto", "Foto é obrigatório").notEmpty();
        request.assert("password","Password é obrigatório").notEmpty();
        request.assert("password","Password é obrigatório").len(8);
        request.assert("email", "E-mail é obrigatório").notEmpty();
        request.assert("email", "E-mail invalido").isEmail;

        let erros = request.validationErrors();
        if(erros){
            console.log("Aquiiiiii => "+erros);
            response.render("usuario/listaUsuario", {validacao: erros});
            return;
        };
        application.app.controllers.cadastrarUsuarioController.salvar(application, request, response);
    });

};



