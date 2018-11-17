module.exports.formulario_inclusao_assunto = (response) =>{
    response.render('cadastro/cadastroAssunto')
};


module.exports.create = (request, response)=>{

    let datasource = require('../../config/datasource');
    let Assunto = datasource.assunto;

    Assunto.create({
        titulo: request.body.titulo
    }).then(assunto =>{
        response.send(assunto)
    });

};



