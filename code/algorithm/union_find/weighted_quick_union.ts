export class WeightedQuickUnion {
  fa: number[];
  size: number[]; // 子树数量
  n: number;
  constructor(n: number) {
    this.fa = [];
    this.size = [];
    this.n = n;
    for (let i = 0; i < n; i++) {
      this.fa[i] = i;
      this.size[i] = 1;
    }
  }
  find(x: number): number {
    return this.fa[x] === x ? x : this.find(this.fa[x]);
  }
  merge(a: number, b: number): void {
    const ra = this.find(a);
    const rb = this.find(b);
    if (this.size[ra] < this.size[rb]) { // 按质优化
      this.fa[ra] = rb;
      this.size[rb] += this.size[ra];
    } else {
      this.fa[rb] = ra;
      this.size[ra] += this.size[rb];
    }
    return;
  }
}
