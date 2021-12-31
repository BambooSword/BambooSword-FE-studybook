import { mockNew } from '../../code/interview/mock_new';
function returnObj() {
  this.type = 'object';
  return {
    return: 'obj',
  };
}
function returnNumber() {
  this.type = 'number';
  return 0;
}
function returnBoolean() {
  this.type = 'boolean';
  return false;
}
function returnSymbol() {
  this.type = 'symbol';
  return Symbol('hello');
}
function returnString() {
  this.type = 'string';
  return 'abc';
}
function returnUndefined() {
  this.type = 'undefined';
  return undefined;
}
function returnNull() {
  this.type = 'null';
  return null;
}
function returnBigInt() {
  this.type = 'BigInt';
  return 999n;
}
describe('test mockNew', () => {
  test('return {}', () => {
    expect(mockNew(returnObj)).toEqual({
      return: 'obj',
    });
  });
  test('return Number', () => {
    expect(mockNew(returnNumber)).toEqual({
      type: 'number',
    });
  });
  test('return Boolean', () => {
    expect(mockNew(returnBoolean)).toEqual({
      type: 'boolean',
    });
  });
  test('return Symbol', () => {
    expect(mockNew(returnSymbol)).toEqual({
      type: 'symbol',
    });
  });
  test('return String', () => {
    expect(mockNew(returnString)).toEqual({
      type: 'string',
    });
  });
  test('return Undefined', () => {
    expect(mockNew(returnUndefined)).toEqual({
      type: 'undefined',
    });
  });
  test('return Null', () => {
    expect(mockNew(returnNull)).toEqual({
      type: 'null',
    });
  });
  test('return BigInt', () => {
    expect(mockNew(returnBigInt)).toEqual({
      type: 'BigInt',
    });
  });
});
