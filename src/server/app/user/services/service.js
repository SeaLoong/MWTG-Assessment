const { UserModel, AuthModel, ArticleModel } = require('../../../library/models/model');

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

async function getAuthByUsername(username) {
    return await AuthModel.findOne({
        where: {
            username
        }
    });
}

async function addAuth(uid, username, password) {
    return await AuthModel.create({
        uid,
        username,
        password
    });
}

module.exports = {
    getUserById,
    addUser,
    getAuthByUsername,
    addAuth
};