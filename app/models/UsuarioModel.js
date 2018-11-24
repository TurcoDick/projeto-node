function UsuarioModel(connection){
    this._connection = connection;
    console.log("Qqqqqqqqqqqqqqqqqqqqqqqqqqq")
};

UsuarioModel.prototype.getUsuarios = function(callback) {
    this._connection.query("select * from usuario order by id desc", callback);
};

UsuarioModel.prototype.getUsuario = (email, password) =>{
    this._connection.query(
        "select * from usuario where email = " + email + "and password = " + password);
};

module.exports= ()=>{
    return UsuarioModel;
};