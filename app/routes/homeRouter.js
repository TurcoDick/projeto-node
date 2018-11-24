
module.exports = (application) => {
    application.get('/', (request, response) => {
        application.app.controllers.homeController.index(application, request, response);
    });


    application.post('/autenticar', (request, response) => {
        application.app.controllers.homeController.autenticar(application, request, response);
    });
};