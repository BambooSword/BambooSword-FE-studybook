import http from 'http';
import context, { Context } from './context';
import request from './request';
import response from './response';

type callback = (ctx: Context) => void;

class Koa {
  callback: callback;
  constructor() {
    this.callback = () => {};
  }
  listen(...args: any[]) {
    // 创建http服务
    const server = http.createServer((req, res) => {
      // this.callback(req, res);
      const ctx = this.createContext(req, res);
      console.log(ctx)
      this.callback(ctx);
      res.end(ctx.body);
    });

    // 启动监听
    server.listen(...args);
  }
  use(callback: callback) {
    this.callback = callback;
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
