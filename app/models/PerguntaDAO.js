function PerguntaDAO(connection){
    this._connection = connection;
};

PerguntaDAO.prototype.getPerguntas = function(callback) {
    let sql = "select * from pergunta order by id desc";
    this._connection.query(sql, callback);
};

PerguntaDAO.prototype.getPergunta = (perguntaId) =>{
    let sql = "select * from pergunta where email = ? and password = ?";
    this._connection.query(sql, perguntaId, callback)
};

PerguntaDAO.prototype.inserePergunta = (pergunta, callback) => {
    let sql = "insert into pergunta set ?";
    this._connection.query(sql,pergunta, callback);
};

PerguntaDAO.prototype.deletePergunta = (perguntaId, callback) =>{
    let sql = "delete from pergunta where id = ?";
    this._connection.query(sql, perguntaId, callback)
};


module.exports= ()=>{
    return PerguntaDAO;
};