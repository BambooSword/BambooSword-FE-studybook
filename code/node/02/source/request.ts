import { IncomingMessage } from 'http';

export interface Request {
  url?: string;
  methods?: string;
  req?: IncomingMessage;
  [key: string]: any;
}

const request: Request = {
  get url() {
    return this?.req?.url;
  },
  get method() {
    return this?.req?.method?.toLowerCase();
  },
};

export default request;
