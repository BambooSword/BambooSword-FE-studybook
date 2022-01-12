const currying = function (fn) {
  const len = fn.length;
  let args = [].slice.call(arguments, 1);
  return function () {
    const params = [].slice.call(arguments);
    const _args = [...args, ...params];
    console.log('this is ===>', this);
    if (_args.length < len) {
      return currying.call(this, fn, ..._args);
    }
    return fn.apply(this, _args);
  };
};

const add1 = currying(function (a, b, c) {
  return a + b + c;
}, 1);
console.log(add1);
const addObj = {
  add2: add1(1),
  add3: add1(2),
};
console.log(addObj.add2(5));


