
module.exports.index = (application, request, response) => {
    const datasource = require('../../config/datasource');
    const Assunto = datasource.assunto;

    Assunto.findAll().then(assuntos => {
        response.render("home/index", {assuntos});
    });
    //response.render("home/index");
};