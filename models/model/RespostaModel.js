module.exports = (sequelize, DataType) => {
    return sequelize.define('resposta', {
        id:{
            type: DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull: false,
            unique:true
        },
        descricao: DataType.TEXT,

    },
    {
        tableName: 'resposta'
    });
};