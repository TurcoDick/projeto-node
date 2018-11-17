
module.exports = (application) => {
    application.get('/', (request, response) => {
        application.app.controllers.homeController.index(application, request, response);
    });
};