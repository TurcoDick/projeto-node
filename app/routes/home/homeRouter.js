
module.exports = (application) => {
    application.get('/', (request, response) => {
        application.app.controllers.home.homeController.index(application, request, response);
    });


    application.post('/autenticar', (request, response) => {
        request.assert("email", "E-mail esta vazio").notEmpty();
        request.assert("password","Senha esta vazia").notEmpty();
        request.assert("password","A senha tem que ter mais de 5 carácteres").len(5);
        let erros = request.validationErrors();
        if(erros){
            response.render("home/index", {validacao: erros, assuntos: {}});
            return;
        }
        application.app.controllers.home.homeController.autenticar(application, request, response);
    });
};