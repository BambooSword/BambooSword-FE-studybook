export class QuickFind {
  color: number[];
  n: number;
  constructor(n: number) {
    this.color = [];
    this.n = n;
    for (let i = 0; i < n; i++) {
      this.color[i] = i;
    }
  }
  find(ind: number): number {
    return this.color[ind];
  }
  merge(a: number, b: number): void {
    if (this.color[a] === this.color[b]) return;
    const cb = this.color[b];
    for (let i = 0; i < this.n; i++) {
      if (this.color[i] === cb) this.color[i] = this.color[a];
    }
    return;
  }
}
