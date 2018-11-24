function AssuntoDAO(connection){
    this._connection = connection;
};

AssuntoDAO.prototype.getAssuntos = function(callback) {
    let sql = "select * from assunto order by id desc";
    this._connection.query(sql, callback);
};

AssuntoDAO.prototype.getAssunto = (assuntoId) =>{
    let sql = "select * from assunto where id = ?";
    this._connection.query(sql, assuntoId, callback)
};

AssuntoDAO.prototype.insereAssunto = (assunto, callback) => {
    let sql = "insert into assunto set ?";
    this._connection.query(sql,assunto, callback);
};

AssuntoDAO.prototype.deleteUsuario = (assuntoId, callback) =>{
    let sql = "delete from assunto where id = ?";
    this._connection.query(sql, assuntoId, callback)
};


module.exports= ()=>{
    return AssuntoDAO;
};