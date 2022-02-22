import Koa from './koa';
import { Context } from './context';

const app = new Koa();

app.use(({ req, res }: Context) => {
  res?.end('Hello Koa!!!');
});

app.listen(3000, () => {
  console.log('Server at 3000');
});
