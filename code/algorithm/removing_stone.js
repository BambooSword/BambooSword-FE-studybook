function maximumScore(a, b, c) {
  let max = Math.max(a, b, c);
  let min = Math.min(a, b, c);
  let res = 0;
  while ((a > 0 && b > 0) || (a > 0 && c > 0) || (b > 0 && c > 0)) {
    if (min === 0) {
      if (min === a) {
        return (res += Math.min(b, c));
      }
      if (min === b) {
        return (res += Math.min(a, c));
      }
      if (min === c) {
        return (res += Math.min(b, a));
      }
    }
    if (min === a) {
      a--;
    } else if (min === b) {
      b--;
    } else if (min === c) {
      c--;
    }
    max = Math.max(a, b, c);
    min = Math.min(a, b, c);
    if (max === a) {
      a--;
    } else if (max === b) {
      b--;
    } else if (max === c) c--;
    max = Math.max(a, b, c);
    min = Math.min(a, b, c);
    res += 1;
  }
  return res;
}
console.log(maximumScore(6, 2, 1));
