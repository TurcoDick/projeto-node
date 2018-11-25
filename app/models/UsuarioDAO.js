
function UsuarioDAO(connection){
    this._connection = connection;
};

UsuarioDAO.prototype.autenticar = function(usuario){
    console.log()
};

UsuarioDAO.prototype.getUsuarios = function(callback) {
    let sql = "select * from `usuario` order by id desc";
    this._connection.query(sql, callback);
};

UsuarioDAO.prototype.getUsuario = function(email, password, response){
    this._connection.query('select * from `usuario` where `email` =? and `password` = ?', [email,password],
        function(error, results, fields) {
            if(error){
                response.send(error)
            }else if(results){
                response.send(results);
            }else if(fields){
                response.send(fields);
            };
    });
};

UsuarioDAO.prototype.insereUsuario = function(usuario, callback) {
    this._connection.query('insert into `usuario` set ?', usuario,callback);
};

UsuarioDAO.prototype.deleteUsuario = (request, callback) =>{
    const { id } = request.params;
    this._connection.query('DELETE FROM customer WHERE id = ?', [id],
        function (error, results, fields) {
            if(error){
                response.send(error)
            }else if(results){
                response.send(results);
            }else if(fields){
                response.send(fields);
            };
        })
};


module.exports= ()=>{
    return UsuarioDAO;
};