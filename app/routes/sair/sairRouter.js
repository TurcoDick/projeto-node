module.exports = (application)=>{
    application.get('/sair',(request, response)=>{
        application.app.controllers.sair.sairController.sair(request, response)
    });
}