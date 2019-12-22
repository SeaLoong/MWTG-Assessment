const Router = require('koa-router');
const controller = require('../controllers/controller');
const router = new Router({prefix: '/api/user'});

router.post('/register', controller.post.register);
router.post('/login', controller.post.login);

module.exports = router;