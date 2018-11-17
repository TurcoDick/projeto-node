module.exports = (sequelize, DataType) =>{
    return sequelize.define('usuario',{
        id:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        nome:{
            type: DataType.STRING,
            allowNull: false
        },
        foto:{
            type: DataType.BLOB({length: 'long'}),
            allowNull: false
        }
    },
    {
        tableName: 'usuario'
    });
};