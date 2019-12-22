const Koa = require('koa');
const KoaBodyParser = require('koa-bodyparser');


const userRouter = require('./app/user/routers/router');

const app = new Koa();

app.use(KoaBodyParser());
app.use(userRouter.routes());


app.listen(8864, () => {
    console.info('Server is running at port 8864');
});
