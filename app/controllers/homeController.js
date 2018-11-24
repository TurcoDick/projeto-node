
module.exports.index = (application, request, response) => {
    const datasource = require('../../config/datasource');
    const Assunto = datasource.assunto;

    Assunto.findAll().then(assuntos => {
        response.render("home/index", {assuntos:{assuntos}, validacao:{}});
    });
};

module.exports.autenticar = (application, request, response) => {
    const datasource = require('../../config/datasource');
    const Usuario = datasource.usuario;

    let dadosForm = request.body;
    let password = dadosForm.password

    request.assert("email", "E-mail esta vazio").notEmpty();
    request.assert("password","Senha esta vazia").notEmpty();
    request.assert("password","A senha tem que ter mais de 8 carácteres").len(8);

    let erros = request.validationErrors();

    if(erros){
        response.render("home/index", {validacao: erros, assuntos: {}});
        return;
    }
    // try{
    //     datasource.sequelize.query('SELECT * FROM  usuario where password like, ?',
    //         {raw: true, replacement: ['password']}
    //     )
    //         .then(projects => {
    //             console.log(projects)
    //         });
    //     console.log("Chegou aqui");
    // }catch (err) {
    //     console.log("A consulta não deu certo !!!!");
    // }

    try {
        Usuario.findAll({
            where:{
                id:1
            }
        });
        console.log(projects);

    }catch (err) {
        console.log("A consulta não deu certo !!!!");
    }



    console.log("Aquiiiii => "+ dadosForm);
    response.send("Tudo ok para criar sessão");

};