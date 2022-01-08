export class QuickUnion {
  boss: number[];
  n: number;
  constructor(n: number) {
    this.boss = [];
    this.n = n;
    for (let i = 0; i < n; i++) {
      this.boss[i] = i;
    }
  }
  find(ind: number): number {
    return this.boss[ind] === ind ? ind : this.find(this.boss[ind]);
  }
  merge(a: number, b: number): void {
    const fa = this.find(a);
    const fb = this.find(b);
    if (fa === fb) return;
    this.boss[fa] = fb; // 比 QuickFind 快很多
    return;
  }
}
