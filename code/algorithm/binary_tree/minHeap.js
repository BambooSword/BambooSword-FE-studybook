class minHeap {
  constructor(data = []) {
    this.data = data
    this.comparator = (a, b) => a - b
    this.heapify()
  }
  /**
   * 进行堆排序
   */
  heapify() {
    if (this.data.length <= 1) return
    // for (let i = Math.floor(this.data.length / 2); i >= 0; i--) {
    //   this.bubbleDown(i)
    // }
    for (let i = 1; i < this.size(); i++) {
      this.bubbleUp(i)
    }
  }
  /**
   * 获取堆顶元素
   */
  peek() {
    return this.data[0] || null
  }
  /**
   * 推入元素到堆尾，然后进行bubbleUp()
   * @param {string|number} value
   */
  offer(value) {
    this.data.push(value)
    this.bubbleUp(this.data.length - 1)
  }
  /**
   * 掉堆顶
   * 返回堆顶的元素，同时把堆尾的元素放到堆顶进行bubbleDown()
   * @returns
   */
  poll() {
    const res = this.data.shift()
    this.data.unshift(this.data.pop())
    this.bubbleDown(0)
    return res
  }
  /**
   * 向上冒泡，小的元素向上浮
   * @param {number} index
   */
  bubbleUp(index) {
    while (index) {
      let parentNode = (index - 1) >> 1 // -1 保证获取到正确的parent
      if (this.comparator(this.data[parentNode], this.data[index]) > 0) {
        this.swap(index, parentNode)
        index = parentNode
      } else {
        break
      }
    }
  }
  /**
   * 向下冒泡，让大的元素往下沉
   * @param {number} index
   */
  bubbleDown(index) {
    const lastIndex = this.data.length - 1
    while (index < lastIndex) {
      let left = index * 2 + 1
      let right = index * 2 + 2
      let findIndex = index
      if (
        left <= lastIndex &&
        this.comparator(this.data[findIndex], this.data[left]) > 0
      ) {
        findIndex = left
      }
      if (
        right <= lastIndex &&
        this.comparator(this.data[findIndex], this.data[right]) > 0
      ) {
        findIndex = right
      }
      if (findIndex !== index) {
        this.swap(findIndex, index)
        index = findIndex
      } else {
        break
      }
    }
  }
  /**
   * 交换 堆的数据
   * @param {number} index1
   * @param {number} index2
   *
   */
  swap(index1, index2) {
    // ;[this.data[index1], this.data[index2]] = [
    //   this.data[index2],
    //   this.data[index1],
    // ]
    const temp = this.data[index1]
    this.data[index1] = this.data[index2]
    this.data[index2] = temp
  }
  /**
   * 获取堆的长度
   */
  size() {
    return this.data.length
  }
}
const arr = [3, 2, 2, 3, 5, 6, 100, 23, 1]
const heap = new minHeap(arr)
console.log(heap.data)
let len = arr.length
for (let i = 0; i < len; i++) {
  const res = heap.poll()
  console.log(res)
}
