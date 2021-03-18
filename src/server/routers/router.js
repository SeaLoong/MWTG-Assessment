const KoaRouter = require('@koa/router');
const apiRouter = require('./api-router');

const router = new KoaRouter();

router.use('/api', apiRouter.routes());
router.use(async (ctx, next) => {
  console.log(4);
  await next();
});

module.exports = router;