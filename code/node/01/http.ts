// const http = require('http');
import http from 'http' // 如何解决这个问题
import fs from 'fs'
// const fs = require('fs');

http
  .createServer((req, res) => {
    const { url, method, headers } = req;
    console.log('there is a req', url, method, headers);

    if (url === '/' && method === 'GET') {
      console.log('in');

      fs.readFile('index.html', (err, data) => {
        if (err) {
          res.writeHead(500, {
            'Content-Type': 'text/plain;charset=utf-8',
          });
          res.end('500 Server error');
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html');
          res.end(data);
        }
      });
    } else if (url === '/users' && method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ name: 'Bamboo', age: 30 }));
    } else if (method === 'GET' && headers.accept?.indexOf('image/*')) {
      // 所有图片
      fs.createReadStream('.' + url).pipe(res);
    } else {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'text/plain;charset=utf-8');
      res.end('404  你好 not find page');
    }
  })
  .listen(3000, () => {
    console.log('serve at 3000');
  });

/* 这个 http.ts的问题
	1. if...else 过多 -> 策略模式
	2. api不够优雅
	3. 复杂业务逻辑 AOP（Aspect-Oriented Programming）

	*/
