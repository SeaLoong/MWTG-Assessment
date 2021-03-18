const { UserModel, AuthModel, ArticleModel } = require('../../../common/models/model');

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
    getAuthByUsername,
    addAuth
};