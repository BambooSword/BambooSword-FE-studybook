export class WeightedQuickUnionPC {
  // pc: path compress 路径压缩
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
    // return this.fa[x] === x ? x : this.find(this.fa[x]);

    // if (this.fa[x] === x) return x;
    // const root = this.find(this.fa[x]);
    // this.fa[x] = root; // 路径压缩优化
    // return root;
    return this.fa[x] === x ? x : (this.fa[x] = this.find(this.fa[x]));
  }
  merge(a: number, b: number): void {
    const ra = this.find(a);
    const rb = this.find(b);
    if (this.size[ra] < this.size[rb]) {
      this.fa[ra] = rb;
      this.size[rb] += this.size[ra];
    } else {
      this.fa[rb] = ra;
      this.size[ra] += this.size[rb];
    }
    return;
  }
}
