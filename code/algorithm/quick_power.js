function quickPow(a, n) {
  let base = a,
    res = 1

  while (n) {
    if (n & 1) {
      res *= base
    }
    base *= base
    n >>= 1
  }
  return res
}
console.log(quickPow(2, 10))
/**
 *
 * @param {integer}} a 底数
 * @param {integer} b 指数
 */
function iterativePower(a, b) {
  let result = 1
  while (b > 0) {
    result *= a
    b--
  }
  return result
}
const a = iterativePower(2, 100)
console.log(a)

/**
 *
 * @param {integer}} a 底数
 * @param {integer} b 指数
 */
function fastPower1(a, b) {
  if ((b === 0)) return 1
  if ((b === 1)) return a;
  if (b % 2 === 0) return fastPower1(a * a, b / 2)
  if (b % 2 !== 0) return a * fastPower1(a * a, (b - 1) / 2)
}
console.log(fastPower1(2, 0))
