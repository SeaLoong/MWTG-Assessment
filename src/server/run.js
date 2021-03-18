const Koa = require('koa');
const KoaBodyParser = require('koa-bodyparser');
const KoaLogger = require('koa-logger');
const KoaCompress = require('koa-compress');
const KoaStatic = require('koa-static');

const router = require('./routers/router');

const app = new Koa(); 

app.use(KoaLogger());
app.use(KoaCompress({ threshold: 2048 }));
app.use(KoaBodyParser());
app.use(async (ctx, next) => {
  console.log(1);
  await next();
});
app.use(router.routes());
app.use(KoaStatic(__dirname + '/../../dist'));
app.use(async (ctx, next) => {
  console.log(2);
  await next();
});

app.listen(8864, () => {
  console.info('Server is running at port 8864');
});
