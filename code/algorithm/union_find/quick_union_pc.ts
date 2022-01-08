export class QuickUnionPC {
  // pc: path compress 路径压缩
  fa: number[];
  n: number;
  constructor(n: number) {
    this.fa = [];
    this.n = n;
    for (let i = 0; i < n; i++) {
      this.fa[i] = i;
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
    if (ra === rb) return;
    this.fa[ra] = rb;
    return;
  }
}

