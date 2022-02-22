import { ServerResponse } from 'http';

export interface Response {
  url?: string;
  methods?: string;
  req?: ServerResponse;
  _body?: string;
  body?: string;
  [key: string]: any;
}

const response: Response = {
  get body() {
    return this._body;
  },
  set body(val) {
    this._body = val;
  },
};
export default response;
