import { IncomingMessage, ServerResponse } from 'http';
interface Response extends ServerResponse {
  body: any;
}
interface Request extends IncomingMessage {
  body: string;
}

export interface Context extends BaseContext {
  request?: Request;
  response?: Response;
  req?: IncomingMessage;
  res?: ServerResponse;
}
export interface BaseContext {
  readonly url: string | undefined;
  body: string;
  method: string | undefined;
}
const context: Context = {
  get url() {
    return this?.request?.url;
  },
  get body() {
    return this?.response?.body;
  },
  set body(val: string) {
    if (this?.response?.body) {
      this.response.body = val;
    }
  },
  get method() {
    return this?.request?.method;
  },
  
};

export default context;
