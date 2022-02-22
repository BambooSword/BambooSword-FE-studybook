import Koa from './koa';
import { Context } from './context';

const app = new Koa();

app.use(async ({ req, res }: Context, next) => {
  console.log(1);
  await next();
  console.log(5);
});
app.use(async ({ req, res }: Context, next) => {
  console.log(2);
  await next();
  console.log(4);
});
app.use(({ req, res }: Context, next) => {
  console.log(3);
  res?.end('Hello Koa!!!');
});

app.listen(3000, () => {
  console.log('Server at 3000');
});
