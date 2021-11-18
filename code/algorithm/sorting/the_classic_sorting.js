// 从小到大排序
function getRandomArr() {
  const res = []
  for (let i = 0; i < Math.floor(Math.random() * 15) + 5; i++) {
    res.push(Math.floor(Math.random() * 10) + 1)
  }
  return res
}

function swapArr(arr, a, b) {
  const temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}
// 1. 选择排序
function selectionSort(arr) {
  const len = arr.length
  if (len < 1) return arr
  for (let i = 0; i < len; i++) {
    let minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    swapArr(arr, i, minIndex)
  }
  return arr
}
const selectionArr = getRandomArr()
console.log('before selection ', selectionArr)
selectionSort(selectionArr)
console.log('after selection sort ===>', selectionArr)

// 2. 插入排序
function insertionSort(arr) {
  const len = arr.length
  let sortInd // 当前要插入到有序数列中的index
  // 有序数列 0 ~ i-1;
  // 无序数列 i ~ len

  for (let i = 1; i < len; i++) {
    sortInd = i
    for (let j = i - 1; j >= 0; j--) {
      if (arr[sortInd] < arr[j]) {
        swapArr(arr, sortInd, j)
        sortInd = j
      } else {
        break
      }
    }
  }
  return arr
}
const insertionArr = getRandomArr()
console.log('before insertion ', insertionArr)
insertionSort(insertionArr)
console.log('after insertion sort ===>', insertionArr)

// 3. 冒泡排序

function bubbleSort(arr) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      // 注意j的终止条件是len - i - 1, 因为我们采用的策略是和下一个元素比较
      if (arr[j] > arr[j + 1]) {
        swapArr(arr, j, j + 1)
      }
    }
  }
  return arr
}

const bubbleArr = getRandomArr()
console.log('before bubble sort', bubbleArr)
insertionSort(bubbleArr)
console.log('after bubble sort', bubbleArr)
// 4. 希尔排序
// 选择排序、冒泡排序、
// 希尔排序是基于插入排序的以下两点性质而提出改进方法的：

// 插入排序在对几乎已经排好序的数据操作时，效率高，即可以达到线性排序的效率；
// 但插入排序一般来说是低效的，因为插入排序每次只能将数据移动一位；
// 希尔排序的基本思想是：先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，待整个序列中的记录"基本有序"时，再对全体记录进行依次直接插入排序。
// 10 ==>  100  100 ==> 10000  1000 => 1000000 
// 插入排序 O (n ^2)
// 1000 2 一组 500组  4*500 = 2000
// 插入排序的一种优化
function shellSort(arr) {
  const len = arr.length
  let gap = len
  while (gap > 1) {
    gap = Math.floor(gap / 2)
    for (let i = gap; i < len; i++) {
      for (let j = i - gap; j >= 0; j -= gap) {
        // 插入排序
        if (arr[j] > arr[j + gap]) {
          swapArr(arr, j, j + gap)
        }
      }
    }
  }
}

const shellArr = getRandomArr()
console.log('before shell sort ===>', shellArr)
shellSort(shellArr)
console.log('after shell sort ===>', shellArr)
// 5. 归并排序

function mergeSort(arr) {
  const len = arr.length
  if (len < 2) return arr
  const middle = Math.floor(len / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right) {
  const result = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  if (left.length) {
    result.push(...left)
  }
  if (right.length) {
    result.push(...right)
  }
  return result
}
const mergeArr = getRandomArr()
console.log('before merge sort ===>', mergeArr)
const mergedArr = mergeSort(mergeArr)
console.log('after merge sort ===>', mergedArr)
// 6. 快速排序
function quickSort(arr, left, right) {
  let partitionIndex
  if (left < right) {
    partitionIndex = partition(arr, left, right)
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }
  return arr
}
function partition(arr, left, right) {
  let pivot = left
  let index = pivot + 1
  for (let i = index; i <= right; i++) {
    // 比pivot小的值都依次和前面的值进行交换，确保最后pivot左边的都小于 arr[pivot]
    if (arr[i] < arr[pivot]) {
      swapArr(arr, i, index)
      index++
    }
  }
  swapArr(arr, pivot, index - 1) // 把pivot和最后一个比它小的值进行交换，完成 partition 过程；
  return index - 1
}

const quickArr = getRandomArr()
console.log('before quick sort ==>', quickArr)
quickSort(quickArr, 0, quickArr.length - 1)
console.log('after quick sort ===>', quickArr)

// 7. 堆排序
class Heap {
  constructor(data) {
    this.data = data
    this.comparator = (a, b) => a - b
    this.heapify()
  }

  size() {
    return this.data.length
  }

  heapify() {
    if (this.size() < 2) {
      return
    }

    for (let i = 1; i < this.size(); i++) {
      this.bubbleUp(i)
    }
  }

  peek() {
    if (!this.size()) return null
    return this.data[0]
  }

  offer(val) {
    this.data.push(val)
    this.bubbleUp(this.size() - 1)
  }

  poll() {
    if (!this.size()) return null
    if (this.size() === 1) return this.data.pop()

    let res = this.data[0]

    this.data[0] = this.data.pop()

    if (this.size()) {
      this.bubbleDown(0)
    }
    return res
  }

  swap(i, j) {
    if (i === j) {
      return
    }
    ;[this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }

  bubbleUp(index) {
    // 向上调整，我们最⾼就要调整到0 号位置

    while (index) {
      // 获取到当前节点的⽗节点，
      const parenIndex = (index - 1) >> 1
      // const parenIndex = Math.floor((index - 1) / 2);
      // const parenIndex = (index - 1) / 2 | 0;

      // ⽐较⽗节点的值和我们当前的值哪个⼩。
      if (this.comparator(this.data[index], this.data[parenIndex]) < 0) {
        //if 交换⽗节点和⼦节点
        this.swap(index, parenIndex)
        // index 向上⾛⼀步，进⾏下⼀次交换

        index = parenIndex
      } else {
        // 防⽌死循环。
        break
      }
    }
  }
  bubbleDown(index) {
    // 我们要获取到最⼤的下标，保证不会交换出界。

    let lastIndex = this.size() - 1
    while (index < lastIndex) {
      // 获取左右⼉⼦的下标
      let leftIndex = index * 2 + 1
      let rightIndex = index * 2 + 2
      // 待交换节点
      let findIndex = index
      if (
        leftIndex <= lastIndex &&
        this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
      ) {
        findIndex = leftIndex
      }

      if (
        rightIndex <= lastIndex &&
        this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
      ) {
        findIndex = rightIndex
      }
      if (index !== findIndex) {
        this.swap(index, findIndex)

        index = findIndex
      } else {
        break
      }
    }
  }
}

const heapArr = getRandomArr()
console.log('before heapArr ===>', heapArr)
const len = heapArr.length
const minHeap = new Heap(heapArr)
const resHeapArr = []
for (let i = 0; i < len; i++) {
  resHeapArr.push(minHeap.poll())
}
console.log('after heapArr ===>', resHeapArr)

// 8. 计数排序

// 简单实现版本
function countSort(arr) {
  const counts = []
  for (let i = 0; i < arr.length; i++) {
    if (!counts[arr[i]]) {
      counts[arr[i]] = 1
      continue
    }
    counts[arr[i]]++
  }
  let index = 0 // 数组中的位置
  for (let j = 0; j < counts.length; j++) {
    while (counts[j] && counts[j]--) {
      arr[index++] = j
    }
  }
  return arr
}
const countArr = getRandomArr()
console.log('before count sorting ===>', countArr)
countSort(countArr)
console.log('after count sorting ===>', countArr)

// 改进版
function countSort2(arr) {
  let min = arr[0],
    max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
    if (arr[i] < min) min = arr[i]
  }
  const counts = new Array(max - min + 1).fill(0)
  // 和简单版一样，找出对应元素的次数
  for (let i = 0; i < arr.length; i++) {
    counts[arr[i] - min]++
  }
  // 累加次数，让元素的个数为叠加式
  for (let i = 1; i < counts.length; i++) {
    counts[i] += counts[i - 1]
  }

  // 从后往前遍历元素，把它放到有序数组中的合适位置
  const sortedArr = []
  for (let i = arr.length - 1; i >= 0; i--) {
    // -- 放前面 是模拟 counts[k-min]-p，且同时把 对应 counts中的记数次数-1；这样方便遇到后面相同的元素执行操作相同
    sortedArr[--counts[arr[i] - min]] = arr[i]
  }

  // 将有序数组值赋值到arr, 可做可不做，具体看是要改变arr还是不改变arr返回新数组
  console.log('this is sorted Arr', sortedArr)
  for (let i = 0; i < sortedArr.length; i++) {
    arr[i] = sortedArr[i]
  }
  return sortedArr
}
const countArr2 = getRandomArr()
console.log('before count sorting 2 ===>', countArr2)
countSort2(countArr2)
console.log('after count sorting 2 ===>', countArr2)
// 9. 桶排序(bucketSort)
function bucketSort(arr, size) {
  if (arr.length === 0) {
    return arr
  }

  let minValue = arr[0]
  let maxValue = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i] // 输入数据的最小值
    }
    if (arr[i] > maxValue) {
      maxValue = arr[i] // 输入数据的最大值
    }
  }

  //桶的初始化
  let DEFAULT_BUCKET_SIZE = 5 // 设置桶的默认数量为5
  const bucketSize = size || DEFAULT_BUCKET_SIZE
  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
  let buckets = new Array(bucketCount)
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = []
  }

  //利用映射函数将数据分配到各个桶中
  for (let i = 0; i < arr.length; i++) {
    buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i])
  }

  arr.length = 0
  for (let i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i]) // 对每个桶进行排序，这里使用了插入排序
    for (let j = 0; j < buckets[i].length; j++) {
      arr.push(buckets[i][j])
    }
  }

  return arr
}
const bucketArr = getRandomArr()
console.log('before bucket sorting ===>', bucketArr)
bucketSort(bucketArr)
console.log('after bucket sorting ===>', bucketArr)
// 10.基数排序（Radix Sort）
// 实现方式一：利用不断对基数进行计数排序
function radixSort(arr) {
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
  }
  for (let i = 1; i <= max; i *= 10) {
    countingSort(arr, i)
  }
  function countingSort(arr, divider) {
    const counts = new Array(10).fill(0)
    for (let i = 0; i < arr.length; i++) {
      counts[Math.floor(arr[i] / divider) % 10]++
    }
    for (let j = 1; j < counts.length; j++) {
      counts[j] += counts[j - 1]
    }
    const res = []
    for (let k = arr.length - 1; k >= 0; k--) {
      res[--counts[Math.floor(arr[k] / divider) % 10]] = arr[k]
    }
    for (let i = 0; i < res.length; i++) {
      arr[i] = res[i]
    }
  }
}

// const radixArr = getRandomArr();
const radixArr = [999999, 888888, 7, 9, 323, 454, 33333, 1, 2, 10000000]
console.log('before radix sorting ===>', radixArr)
radixSort(radixArr)
console.log('after radix sorting ===>', radixArr)

// 实现方式二：二维数组保存数据
function radixSort2(arr) {
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
  }
  const counter = [] //存放排好基数位置的二维数组
  for (let i = 1; i < max; i *= 10) {
    let index = 0
    // 进行基数位排序
    for (let j = 0; j < arr.length; j++) {
      const radix = Math.floor(arr[j] / i) % 10
      if (!counter[radix]) counter[radix] = []
      counter[radix].push(arr[j])
    }
    // 对arr进行重新赋值
    for (let k = 0; k < counter.length; k++) {
      while (counter[k] && counter[k].length > 0) {
        arr[index++] = counter[k].shift()
      }
    }
  }
}
const radixArr2 = [999999, 888888, 7, 9, 323, 454, 33333, 1, 2]
console.log('before radix2 sorting ===>', radixArr2)
radixSort2(radixArr2)
console.log('after radix2 sorting ===>', radixArr2)
