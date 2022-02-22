import http from 'http';
import context, { Context } from './context';
import request from './request';
import response from './response';

type callback = (ctx: Context, next:() =>Promise<any>) => void;

class Koa {
  callback: callback;
  middlewares: Function[];
  constructor() {
    this.callback = () => {};
    this.middlewares = [];
  }
  listen(...args: any[]) {
    // 创建http服务
    const server = http.createServer((req, res) => {
      // this.callback(req, res);
      const ctx = this.createContext(req, res);
      console.log(ctx);
      const fn = this.compose(this.middlewares);
      fn(ctx);
      res.end(ctx.body);
    });

    // 启动监听
    server.listen(...args);
  }
  use(middleware: callback, next?: () => Promise<any>) {
    this.middlewares.push(middleware);
  }
  compose(middlewares: Function[]) {
    return function (ctx: Context) {
      return dispatch(0);
      function dispatch(i: number) {
        let fn = middlewares[i];
        if (!fn) {
          return Promise.resolve();
        }
        return Promise.resolve(
          fn(ctx, function next() {
            dispatch(i + 1);
          }),
        );
      }
    };
  }

  createContext(req: http.IncomingMessage, res: http.ServerResponse) {
    const ctx = Object.create(context);
    ctx.request = Object.create(request);
    ctx.response = Object.create(response);
    ctx.req = ctx.request.req = req;
    ctx.res = ctx.response.res = res;
    return ctx;
  }
}
export default Koa;
