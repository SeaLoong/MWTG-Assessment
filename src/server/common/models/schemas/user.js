module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        type: {
            type: DataTypes.TINYINT,
            allowNull: false,
            commit: '0=普通用户;1=管理员'
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'user',
        charset: 'utf8'
    });
}