
module.exports = (application) =>{
    application.get('/formulario_inclusao_usuario', function(request, response) {
        application.app.controllers.cadastrarUsuarioController.formulario_inclusao_usuario(application, request, response);
    });
};