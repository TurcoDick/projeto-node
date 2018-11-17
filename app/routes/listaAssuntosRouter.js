
module.exports = (application) =>{
    application.get('/lista_assuntos',(request, response) =>{
        application.app.controllers.listaAssuntosController.retornaListaAssuntos(request, response);
    });
};