module.exports.retornaUsuarios = (application, response) =>{
    const datasource = require('../../config/datasource');
    const Usuario = datasource.usuario;

    Usuario.findAll().then(usuarios => {
       response.render('usuario/listaUsuario', {usuarios:usuarios});
    });
};