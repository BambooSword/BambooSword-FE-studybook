export function mockNew() {
  const obj = {};
  const constructor = Array.prototype.shift.call(arguments);
  obj.__proto__ = constructor.prototype;
  const res = constructor.call(obj, arguments);
  return typeof res !== 'object' || res === null ? obj : res;
}
/**
 * 这是一个模拟 new 操作符的函数
 * @param {constructor} fn 构造函数
 * @returns
 */
function NewFn(fn) {
  // 1. 创建一个新的空对象
  const obj = {};
  // 2. **设置构造函数的原型**
  // 2. 设置空对象的原型，让其指向为构造函数的prototype属性
  obj.__proto__ = fn.prototype;
  // 3. 让构造函数的this指向新的空对象，并执行构造函数
  const res = fn.call(obj);
  // 4. 判断构造函数的返回类型，如果是值类型，则返回 obj, 如果是引用类型，则返回该引用类型的对象
  // return (typeof res ===  'object' && res !== null) ? res : obj;
  const isYinYong = typeof res === 'object' && res !== null;
  if (isYinYong) {
    return res;
  } else {
    return obj;
  }
}

function A() {
  this.a = 'this is a ';
  return 1;
}
function B() {
  this.b = 'this si b ';
  return {
    b: 'dddddddd',
  };
}
console.log(new A());
console.log(new B());
console.log('模拟 new A 的函数 NewFn(A)', NewFn(A));
