const { UserModel, AuthModel, ArticleModel } = require('../../../common/models/model');

async function getUserById(id) {
    return await UserModel.findById(id);
}

async function addUser(type, nickname, avatar, username, password) {
    return await UserModel.create({
        type,
        nickname,
        avatar,
        Auths: [{
            username,
            password
        }]
    }, {
        includes: [AuthModel]
    });
}

module.exports = {
    getUserById,
    addUser
};