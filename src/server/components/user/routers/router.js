const KoaRouter = require('@koa/router');
const controller = require('../controllers/controller');
const validator = require('../controllers/validator');

const router = new KoaRouter();

router.post('/register', validator.register, controller.register);
// router.post('/login', controller.login);

module.exports = router;