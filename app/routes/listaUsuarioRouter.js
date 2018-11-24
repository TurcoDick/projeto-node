module.exports = (application, request, response) =>{
    application.get('/listaUsuarios', (request, response) =>{
        application.app.controllers.listaUsuariosController.retornaUsuarios(application, response);
    });
};