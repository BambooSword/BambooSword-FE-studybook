var judgeSquareSum1 = function (c) {
  for (let i = 0; i <= Math.floor(Math.sqrt(c)); i++) {
    const b = Math.sqrt(c - i * i)
    if (b === parseInt(b)) return true
  }
  return false
}

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum2 = function(c) {
    let a = 0; b  = Math.floor(Math.sqrt(c));
    while(a <= b) {
        if(a **2 + b **2 === c) return true;
        if(a **2 + b **2 < c) a++;
        if(a **2 + b **2 > c) b--;
    }
    return false;
};

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum3 = function(c) {
    for(let i = 2; i <= Math.floor(Math.sqrt(c)); i ++) {
        if(c % i !== 0) {
            continue; // 不是因子，下一个
        }

        let exp = 0;
        while(c % i ===0) { // 计算 i的幂
            c/= i;
            exp ++;
        }
        if(i % 4 ===3 && exp %2 !==0) { //根据平方和定理验证
            return false;
        }
        
    }
    return c % 4 !==3;
};
