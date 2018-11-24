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
            allowNull: true
        },
        foto:{
            type: DataType.BLOB({length: 'long'}),
            allowNull: true
        },
        password:{
            type: DataType.STRING(85)
        },
        email:{
            type: DataType.STRING
        }
    },
    {
        tableName: 'usuario'
    });
};