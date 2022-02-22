// // 实现 compose 组合函数

const add = (x: number, y: number) => x + y;
const square = (x: number) => x * x;

// const compose =
//   (fn1: Function, fn2: Function) =>
//   (...args: any[]) =>
//     fn2(fn1(...args));

// 最简单版compose
// const compose =
//   (...[first, ...others]: Function[]) =>
//   (...args: number[]) => {
//     let res = first(...args);
//     others.forEach((fn) => {
//       res = fn(res);
//     });
//     return res;
//   };

// const fn = compose(add, square, square);
// console.log(fn(1, 2));

// [compose实现合集](https://juejin.cn/post/6893338774088974343)

async function fn1(next: Function) {
  console.log(1);
  await next();
  console.log(5);
}
async function fn2(next: Function) {
  console.log(2);
  await next();
  console.log(4);
}
async function fn3(next: Function) {
  console.log(3);
}

const compose = (middlewares: Function[]) => {
  return function () {
    return dispatch(0);
    function dispatch(i: number) {
      let fn = middlewares[i];
      if (!fn) {
        return Promise.resolve();
      }
      return Promise.resolve(
        fn(function next() {
          return dispatch(i + 1);
        }),
      );
    }
  };
};
compose([fn1, fn2, fn3])();
console.log(111)