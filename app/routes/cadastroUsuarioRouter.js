
module.exports = (application) =>{
    application.get('/formulario_inclusao_usuario', function(request, response) {
        application.app.controllers.cadastrarUsuarioController.formulario_inclusao_usuario(application, request, response);
    });

    application.post('/formulario_inclusao_usuario/create', (request, response) => {
        application.app.controllers.cadastrarUsuarioController.create(request, response)
    });

};



