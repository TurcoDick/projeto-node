module.exports = (application)=>{
    application.get("/deleteUsuario", (request, response)=>{
        application.app.controllers.deleteUsuarioController.delete(application, request, response);
    });
};