function quickPow(a, n) {
  let base = a,
    res = 1;

  while (n) {
    if (n & 1) {
      res *= base;
    }
    base *= base;
    n >>= 1;
  }
  return res;
}
console.log(quickPow(2, 10));
/**
 *
 * @param {integer}} a 底数
 * @param {integer} b 指数
 */
function iterativePower(a, b) {
  let result = 1;
  while (b > 0) {
    result *= a;
    b--;
  }
  return result;
}
const a = iterativePower(2, 100);
console.log(a);

/**
 *
 * @param {integer}} a 底数
 * @param {integer} b 指数
 */
// 递归版
function fastPower1(a, b) {
  if (b === 0) return 1;
  if (b === 1) return a;
  if (b % 2 === 0) return fastPower1(a * a, b / 2);
  if (b % 2 !== 0) return a * fastPower1(a * a, (b - 1) >> 1);
}
console.log(fastPower1(2, 10));

// 尾递归版
function exp_by_squaring(x, n) {
  return exp_by_squaring2(1, x, n);
}
function exp_by_squaring2(y, x, n) {
  if (n === 0) return y;
  if (n === 1) return x * y;
  if (n % 2 === 0) return exp_by_squaring2(y, x * x, n / 2);
  if (n % 2 === 1) return exp_by_squaring2(x * y, x * x, (n - 1) >> 1);
}

console.log('exp_by_squaring', exp_by_squaring(2, 10));
console.log('exp_by_squaring', exp_by_squaring(3, 10));
// 迭代版
function exp_by_squaring_iterative(x, n) {
  let y = 1;
  if (n === 0) return 1;
  while (n > 1) {
    if (n % 2 === 0) {
      x *= x;
      n /= 2;
    } else {
      y *= x;
      x *= x;
      n = (n - 1) >> 1;
    }
  }
  return x * y;
}
console.log('exp_by_squaring_iterative', exp_by_squaring_iterative(2, 11));
console.log('exp_by_squaring_iterative', exp_by_squaring_iterative(3, 10));
