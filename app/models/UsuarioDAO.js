function UsuarioDAO(connection){
    this._connection = connection;
};

UsuarioDAO.prototype.getUsuarios = function(callback) {
    let sql = "select * from usuario order by id desc";
    this._connection.query(sql, callback);
};

UsuarioDAO.prototype.getUsuario = (email, password) =>{
    let sql = "select * from usuario where email = ? and password = ?";
    this._connection.query(sql, [ email, password], function (err, result) {
        if (err){
            console.log("ERRO: "+err )
        } else{
            console.log("RESULT :" +result)
        }
    })
};

UsuarioDAO.prototype.insereUsuario = (usuario, callback) => {
    let sql = "insert into usuario set ?";
    this._connection.query(sql ,usuario, callback);
    console.log(this._connection.query)
};

UsuarioDAO.prototype.deleteUsuario = (usuarioId, callback) =>{
    let sql = "delete from usuario where id = ?";
    this._connection.query(sql, usuarioId, callback)
};


module.exports= ()=>{
    return UsuarioDAO;
};