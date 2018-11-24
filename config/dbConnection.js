let mysql = require("mysql");

let connMySQL = (error, result)=>{
    return connection = mysql.createConnection({
        host: "localhost",
        user: "usuario_simples",
        password: "123",
        database: "stackoverflow_node",
    });
};


module.exports = () =>{
    return connMySQL;
};