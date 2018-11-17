module.exports = (sequelize, DataType) => {
    return sequelize.define('assunto',{
        id:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        titulo:{
            type: DataType.STRING,
            allowNull: true
        }
    },{
        tableName: "assunto"
    });
};