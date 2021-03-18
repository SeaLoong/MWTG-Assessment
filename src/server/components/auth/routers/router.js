const Router = require('@koa/router');
const controller = require('../controllers/controller');
const router = new Router({prefix: '/api/auth'});

router.post('/register', controller.post.register);
router.post('/login', controller.post.login);

module.exports = router;