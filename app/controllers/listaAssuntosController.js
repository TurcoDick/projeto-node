module.exports.retornaListaAssuntos = (request, response) =>{

  Assunto.findAll().then(assuntos => {
      response.render('assunto/listaAssuntos', {assuntos});
  });
};