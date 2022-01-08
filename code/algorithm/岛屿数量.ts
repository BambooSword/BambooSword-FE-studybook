function numIslands(grid: string[][]): number {
  const set = new UnionSet(grid);
  const m = grid.length;
  const n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        grid[i][j] = '0';
        if (i - 1 >= 0 && grid[i - 1][j] === '1') {
          set.union(i * n + j, (i - 1) * n + j);
        }
        if (i + 1 < m && grid[i + 1][j] === '1') {
          set.union(i * n + j, (i + 1) * n + j);
        }
        if (j - 1 >= 0 && grid[i][j - 1] === '1') {
          set.union(i * n + j, i * n + (j - 1));
        }
        if (j + 1 < n && grid[i][j + 1] === '1') {
          set.union(i * n + j, i * n + (j + 1));
        }
      }
    }
  }
  return set.counts();
}

class UnionSet {
  fa: number[] = [];
  land = 0;
  constructor(grid: string[][]) {
    const m = grid.length;
    const n = grid[0].length;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        console.log('i * m + j', i * m +j * n)
        if (grid[i][j] === '1') {
          this.fa[i * n + j] = i * n + j;
          this.land++;
        } else {
          this.fa[i * n + j] = -1;
        }
      }
    }
    console.log(this.land);
  }
  union(ind1: number, ind2: number) {
    console.log('this.land', this.land, ind1, ind2);
    if (this.fa[this.find(ind1)] !== this.find(ind2)) {
      this.fa[this.find(ind1)] = this.find(ind2);

      this.land--;
    }
  }
  find(ind: number) {
    if (this.fa[ind] !== ind) {
      this.fa[ind] = this.find(this.fa[ind]);
    }
    return this.fa[ind];
  }
  counts() {
    return this.land;
  }
}

const d = [
  ['1', '0', '1', '1', '1'],
  ['1', '0', '1', '0', '1'],
  ['1', '1', '1', '0', '1'],
];
console.log(numIslands(d));
