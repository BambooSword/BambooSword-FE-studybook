function getNumberOfBacklogOrders(orders) {
  const buy = new Heap([], (p, c) => c[0] - p[0] > 0);
  const sell = new Heap([], (p, c) => p[0] - c[0] > 0);
  for (let i = 0; i < orders.length; i++) {
    const item = orders[i];
    if (item[2]) {
      // sell
      let peekBuy = buy.peek();
      while (peekBuy && peekBuy[0] >= item[0] && item[1]) {
        const b1 = peekBuy[1];
        const s1 = item[1];
        if (b1 <= s1) {
          buy.poll();
          item[1] -= b1;
          if (b1 < s1) {
            buy.poll();
            peekBuy = buy.peek();
          }
        } else {
          peekBuy[1] -= s1;
          item[1] -= s1;
        }
      }
      if (item[1] > 0) {
        sell.offer(item);
      }
    } else {
      // buy
      // buy.offer(item);
      let peekSell = sell.peek();
      while (peekSell && peekSell[0] <= item[0] && peekSell[1] && item[1]) {
        const s1 = peekSell[1];
        const b1 = item[1];
        if (b1 >= s1) {
          sell.poll();
          item[1] -= s1;
          if (b1 > s1) {
            peekSell = sell.peek();
          }
        } else {
          peekSell[1] -= b1;
          item[1] -= b1;
        }
      }
      if (item[1] > 0) {
        buy.offer(item);
      }
    }
  }
  let res = 0;
  buy.data.forEach((item) => {
    res += item[1];
  });
  sell.data.forEach((item) => {
    res += item[1];
  });
  return res % 1000000007;
}

class Heap {
  constructor(data, comparator) {
    this.data = data;
    this.comparator = comparator;
    this.heapify();
  }
  heapify() {
    if (!this.size()) return;
    for (let i = 1; i < this.size(); i++) {
      this.bubbleUp(i);
    }
  }
  bubbleUp(index) {
    while (index > 0) {
      const parent = (index - 1) >> 1;
      if (this.comparator(this.data[parent], this.data[index])) {
        this.swap(parent, index);
        index = parent;
      } else {
        break;
      }
    }
  }
  bubbleDown(index) {
    const len = this.size();
    while (index < len) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let findIndex = index;
      if (
        leftIndex < len &&
        this.comparator(this.data[findIndex], this.data[leftIndex])
      ) {
        findIndex = leftIndex;
      }
      if (
        rightIndex < len &&
        this.comparator(this.data[findIndex], this.data[rightIndex])
      ) {
        findIndex = rightIndex;
      }
      if (index !== findIndex) {
        this.swap(findIndex, index);
        index = findIndex;
      } else {
        break;
      }
    }
  }
  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1],
    ];
  }
  poll() {
    if (!this.size()) return null;
    const res = this.data.shift();
    if (this.size()) {
      this.data.unshift(this.data.pop());
      this.bubbleDown(0);
    }
    return res;
  }
  offer(val) {
    this.data.push(val);
    this.bubbleUp(this.size() - 1);
  }
  peek() {
		if(!this.size()) return null;
    return this.data[0];
  }
  size() {
    return this.data.length;
  }
}
const r = getNumberOfBacklogOrders([
  [10, 5, 0],
  [15, 2, 1],
  [25, 1, 1],
  [30, 4, 0],
]);
console.log(r);