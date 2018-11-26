
let crypto = require('crypto');

function UsuarioDAO(connection){
    this._connection = connection;
};

UsuarioDAO.prototype.autenticar = function(usuario){
    let senhaCriptografada = crypto.createHash("md5").update(usuario.password).digest("hex");
    usuario.password = senhaCriptografada;

    console.log()
};

UsuarioDAO.prototype.getUsuarios = function(callback) {
    let sql = "select * from `usuario` order by id desc";
    this._connection.query(sql, callback);
};

UsuarioDAO.prototype.getUsuario = function(application,email, password, request,response){
    this._connection.query('select * from `usuario` where `email` =? and `password` = ?', [email,password]
    );
};

UsuarioDAO.prototype.insereUsuario = function(usuario, callback) {
    console.log(usuario.password);
    let senhaCriptografada = crypto.createHash("md5").update(usuario.password).digest("hex");

    usuario.password = senhaCriptografada;

    this._connection.query('insert into `usuario` set ?', usuario,callback);
};

UsuarioDAO.prototype.deleteUsuario = (request, callback) =>{
    this._connection.query('delete from usuario set ?', + request.params.id);
};


module.exports= ()=>{
    return UsuarioDAO;
};