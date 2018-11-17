module.exports = (sequelize, DataType) => {
    return sequelize.define('pergunta', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        descricao: {
            type: DataType.STRING,
            allowNull: false
        }
    },
    {
        tableName:'pergunta'
    });
};