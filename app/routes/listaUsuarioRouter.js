module.exports = (application) =>{
    application.get('/listaUsuarios', (request, response) =>{
        application.app.controllers.listaUsuariosController.retornaUsuarios(application, response);
    });
};