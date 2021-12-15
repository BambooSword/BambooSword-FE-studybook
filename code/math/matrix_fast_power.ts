// const a = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// const b = [
//   [7, 8, 9],
//   [4, 5, 6],
//   [1, 2, 3],
// ];
// const a = [
//   [1, 0, 2],
//   [-1, 3, 1],
// ];
// const b = [
//   [3, 1],
//   [2, 1],
//   [1, 0],
// ];
type TwoDArr = Array<Array<number>>;
// 矩阵相乘 multiply
function multi(a: TwoDArr, b: TwoDArr) {
  const res: TwoDArr = [];
  const row1 = a.length,
    row2 = b.length,
    col1 = a[0].length,
    col2 = b[0].length;
  if (col1 !== row2) {
    return new Error('not a right matrix to multiply');
  }
  // 初始化结果数组
  for (let i = 0; i < row1; i++) {
    res[i] = new Array(col2).fill(0);
  }
  for (let i = 0; i < row1; i++) {
    for (let j = 0; j < col2; j++) {
      for (let k = 0; k < col1; k++) {
        res[i][j] += a[i][k] * b[k][j];
      }
    }
  }
  return res;
}
// const res = multi(a, b);
// console.log(res);

// Matrix ^n 如何解答
/**
 *
 * @param a 底数
 * @param n 指数
 */
function mat_pow(a: TwoDArr, n: number) {
  const len = a.length;
  let res: TwoDArr = [];
  for (let i = 0; i < len; i++) {
    res[i] = new Array(len).fill(0);
    res[i][i] = 1;
  }
  while (n) {
    if (n & 1) res = multi(res, a) as TwoDArr;
    a = multi(a, a) as TwoDArr;
    n >>= 1;
  }
  return res;
}
const c = [
  [1, 2],
  [3, 4],
];
const test = mat_pow(c, 5);
console.log(test);

