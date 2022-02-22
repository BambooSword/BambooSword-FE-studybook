import http from 'http';
interface Response extends http.ServerResponse {
  body: any;
}
interface Request extends http.IncomingMessage {
  body: string;
}

interface Context {
  request: Request;
  response: Response;
  readonly url: string | undefined;
  body: string;
  method: string | undefined;
}
const context: Context = {
  get url() {
    return this.request.url;
  },
  get body() {
    return this.response.body;
  },
  set body(val: string) {
    this.response.body = val;
  },
  get method() {
    return this.request.method;
  },
	request
};

export default context;
