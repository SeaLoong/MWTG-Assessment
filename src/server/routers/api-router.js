const KoaRouter = require('@koa/router');
const KoaJwt = require('koa-jwt');
const db = require('../common/config/db');

const userRouter = require('../components/user/routers/router');

const router = new KoaRouter();

 // 所有以/api开头的请求都要进行以下检查
 router.use(async (ctx, next) => {
  try {
    if (!ctx.accepts('json')) ctx.throw(415);
    await next();
  } catch (err) {
      console.log(err);
    ctx.status = err.status || err.code;
    ctx.body = {
      success: false,
      message: err.message,
    };
  }
});
// router.use(KoaJwt({ secret: db.jwtSecret}));

router.use('/user', userRouter.routes());

module.exports = router;