const service = require('../services/service');

async function register(ctx) {
    const data = ctx.request.body;
    console.log(await service.addUser(data.type, data.nickname, data.avatar, data.username, data.password));
    ctx.body = {
        success: true,
        message: 'ok'
    };
}

module.exports = {
    register
}