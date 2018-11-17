
module.exports = (application) => {
    application.get('/', (request, response) => {
        application.app.controllers.home.index(application, request, response);
    });
};