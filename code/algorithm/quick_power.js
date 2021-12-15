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
/**
 * @param {number} n
 * @return {number}
 */
const cache = [0, 1];

var fib = function (n) {
  const MOD = 1000000007;
  // const dp = [0, 1];
  // for (let i = 2; i <= n; i++) {
  //     dp[i] = (dp[i - 1] + dp[i - 2]) %MOD;
  // }
  // return dp[n]
  // 方法1, 使用递归， 不行
  // 方法2，使用cache来保存计算过的值
  // 方法3，使用移动数组
  // 方法4，学习线性代数

  // if(n ===0) return 0;
  // if(n ===1) return 1;
  // if(cache[n]) return cache[n];

  // const res =  (fib(n-1) + fib(n-2)) % 1000000007;
  // cache[n] = res;
  // return res;
  // 使用移动数组
  // if(n < 2) return n;

  // let l = 0, r = 0, res = 1;
  // while(n>=2) {;
  //     l = r;
  //     r = res;
  //     res = (l+r)%1000000007
  //     n --
  // }
  // return res
  if (n === 0) return 0;
  let mat = [
    [1, 1],
    [1, 0],
  ];
  let res = [
    [1, 0],
    [0, 1],
  ];
  let k = n - 1;
  while (k > 0) {
    if (k & 1) res = multi(res, mat);
    mat = multi(mat, mat);
    k >>= 1;
  }

  return res[0][0] % MOD;
};
function multi(a, b) {
  const MOD = 1000000007;
  return [
    [
      (((a[0][0] * b[0][0]) % MOD) + ((a[0][1] * b[0][1]) % MOD)) % MOD,
      (((a[0][0] * b[1][0]) % MOD) + ((a[0][1] * b[1][1]) % MOD)) % MOD,
    ],
    [
      (((a[1][0] * b[0][0]) % MOD) + ((a[1][1] * b[0][1]) % MOD)) % MOD,
      (((a[1][0] * b[1][0]) % MOD) + ((a[1][1] * b[1][1]) % MOD)) % MOD,
    ],
  ];
  // const row1 = a.length,
  //   row2 = b.length,
  //   col1 = a[0].length,
  //   col2 = b[0].length,
  //   res = [];
  // if (col1 !== row2) {
  //   return new Error('not a right matrix to multiply');
  // }
  // // 初始化结果数组
  // for (let i = 0; i < row1; i++) {
  //   res[i] = new Array(col2).fill(0);
  // }
  // for (let i = 0; i < row1; i++) {
  //   for (let j = 0; j < col2; j++) {
  //     for (let k = 0; k < col1; k++) {
  //       res[i][j] = (res[i][j] + a[i][k] * b[k][j]) % MOD;
  //     }
  //   }
  // }
  // return res;
}
console.log(fib(100));
