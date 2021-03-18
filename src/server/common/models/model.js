const Mysql = require('../database/mysql');

const UserModel = Mysql.import('./schemas/user');
const AuthModel = Mysql.import('./schemas/auth');
const ArticleModel = Mysql.import('./schemas/article');

UserModel.hasMany(AuthModel, {foreignKey: 'uid', targetKey: 'id'});
UserModel.hasMany(ArticleModel, {foreignKey: 'uid', targetKey: 'id'});


module.exports = {
    UserModel,
    AuthModel,
    ArticleModel
}