import { mockNew } from '../../code/interview/mock_new';
function returnObj() {
  return {
    return: 'obj',
  };
}
function returnNumber() {
  return 0;
}
function returnBoolean() {
  return false;
}
function returnSymbol() {
  return Symbol('hello');
}
function returnString() {
  return 'abc';
}
function returnUndefined() {
  return undefined;
}
function returnNull() {
  return null;
}
function returnBigInt() {
  return 999n;
}
describe('test mockNew', () => {
  test('return {}', () => {
    expect(mockNew(returnObj)).toEqual({
      return: 'obj',
    });
  });
  test('return Number', () => {
    expect(mockNew(returnNumber)).toEqual({});
  });
  test('return Boolean', () => {
    expect(mockNew(returnBoolean)).toEqual({});
  });
  test('return Symbol', () => {
    expect(mockNew(returnSymbol)).toEqual({});
  });
  test('return String', () => {
    expect(mockNew(returnString)).toEqual({});
  });
  test('return String', () => {
    expect(mockNew(returnUndefined)).toEqual({});
  });
  test('return Null', () => {
    expect(mockNew(returnNull)).toEqual({});
  });
  test('return BigInt', () => {
    expect(mockNew(returnBigInt)).toEqual({});
  });
});
