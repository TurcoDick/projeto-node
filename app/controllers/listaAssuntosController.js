module.exports.retornaListaAssuntos = (request, response) =>{
  const datasource = require('../../config/datasource');
  const Assunto = datasource.assunto;

  Assunto.findAll().then(assuntos => {
      response.render('assunto/listaAssuntos', {assuntos});
  });
};