export function mockNew() {
  const obj = {};
  const constructor = Array.prototype.shift.call(arguments);
  obj.__proto__ = constructor.prototype;
  const res = constructor.call(obj, arguments);
  return typeof res !== 'object' || res === null ? obj : res;
}
