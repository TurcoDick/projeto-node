function RespostaDAO(connection){
    this._connection = connection;
};

RespostaDAO.prototype.getRespostas = function(callback) {
    let sql = "select * from resposta order by id desc";
    this._connection.query(sql, callback);
};

RespostaDAO.prototype.getResposta = (respostaId) =>{
    let sql = "select * from resposta where email = ? and password = ?";
    this._connection.query(sql, respostaId, callback)
};

RespostaDAO.prototype.insereResposta = (resposta, callback) => {
    let sql = "insert into resposta set ?";
    this._connection.query(sql,resposta, callback);
};

RespostaDAO.prototype.deleteResposta = (respostaId, callback) =>{
    let sql = "delete from resposta where id = ?";
    this._connection.query(sql, respostaId, callback)
};


module.exports= ()=>{
    return RespostaDAO;
};