module.exports.formulario_inclusao_assunto = (response) =>{
    response.render('cadastro/cadastroAssunto')
};


module.exports.create = (request, response)=>{

    Assunto.create({
        titulo: request.body.titulo
    }).then(assunto =>{
        response.send(assunto)
    });

};



