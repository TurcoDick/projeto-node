
module.exports = (application) => {
    application.get('/formulario_inclusao_assunto', (request, response) => {
        application.app.controllers.cadastrarAssuntoController.
        formulario_inclusao_assunto(response);
    });

    application.post('/formulario_inclusao_assunto/create', (request, response) => {
        application.app.controllers.cadastrarAssuntoController.create(request, response)
    });
};