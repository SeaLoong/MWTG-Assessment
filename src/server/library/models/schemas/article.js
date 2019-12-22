module.exports = (sequelize, DataTypes) => {
    return sequelize.define('article', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        category: DataTypes.STRING,
        label: DataTypes.STRING
    }, {
        tableName: 'article',
        charset: 'utf8'
    });
}