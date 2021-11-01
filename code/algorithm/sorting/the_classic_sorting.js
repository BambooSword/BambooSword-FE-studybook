// 从小到大排序
function getRandomArr() {
  const res = []
  for (let i = 0; i < Math.floor(Math.random() * 15) + 5; i++) {
    res.push(Math.floor(Math.random() * 10) + 1)
  }
	return res;
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
const selectionArr = getRandomArr();
console.log('before selection ', selectionArr)
selectionSort(selectionArr)
console.log('after selection sort ===>', selectionArr)

// 2. 插入排序
function insertionSort(arr) {
  const len = arr.length
  let sortInd; // 当前要插入到有序数列中的index
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
const insertionArr = getRandomArr();
console.log('before insertion ',insertionArr)
insertionSort(insertionArr)
console.log('after insertion sort ===>', insertionArr)

// 3. 冒泡排序

function bubbleSort(arr) {
	const len = arr.length;
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len-i-1; j++) { // 注意j的终止条件是len - i - 1, 因为我们采用的策略是和下一个元素比较
			if(arr[j] > arr[j+1]) {
				swapArr(arr, j, j+1);
			}
		}
	}
	return arr;
}

const bubbleArr = getRandomArr();
console.log('before bubble sort',bubbleArr);
insertionSort(bubbleArr)
console.log('after bubble sort', bubbleArr)
// 4. 希尔排序
function shellSort(arr) {
	const len = arr.length;
	let gap = len;
	while(gap > 1) {
		gap  = Math.floor(gap/2);
		for (let i = gap; i < len; i++) {
			for (let j = i -gap; j >= 0; j -= gap) { // 插入排序
				if (arr[j] > arr[j+gap]) {
					swapArr(arr, j, j+gap);
				}
			}
		}
	}
}

const shellArr = getRandomArr();
console.log('before shell sort ===>', shellArr);
shellSort(shellArr)
console.log('after shell sort ===>',shellArr);
// 5. 归并排序

function mergeSort(arr) {
	const len = arr.length;
	if(len < 2) return arr;
	const middle = Math.floor(len/2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);
	return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
	const result = [];
	while(left.length && right.length) {
		if(left[0] <= right[0]) {
			result.push(left.shift());
		}else {
			result.push(right.shift());
		}
	}
	if(left.length) {
		result.push(...left);
	}
	if(right.length) {
		result.push(...right);
	}
	return result;
}
const mergeArr = getRandomArr();
console.log('before merge sort ===>', mergeArr);
const mergedArr = mergeSort(mergeArr);
console.log('after merge sort ===>', mergedArr)
// 6. 快速排序
function quickSort(arr, left, right) {
	let partitionIndex;
	if(left < right) {
		partitionIndex = partition(arr, left, right);
		quickSort(arr, left, partitionIndex -1);
		quickSort(arr, partitionIndex + 1, right);
	}
	return arr;
}
function partition(arr, left, right) {
	let pivot = left;
	let index = pivot +1;
	for (let i = index; i <= right; i++) { // 比pivot小的值都依次和前面的值进行交换，确保最后pivot左边的都小于 arr[pivot]
		if(arr[i] < arr[pivot]) {
			swapArr(arr, i, index);
			index++;
		}
	}
	swapArr(arr, pivot, index-1);// 把pivot和最后一个比它小的值进行交换，完成 partition 过程；
	return index -1;
}

const quickArr = getRandomArr();
console.log('before quick sort ==>', quickArr)
quickSort(quickArr, 0, quickArr.length-1)
console.log('after quick sort ===>', quickArr)


// 7. 堆排序
class Heap {
  constructor(data) {
    this.data = data
    this.compartor = (a, b) => a - b
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
      if (this.compartor(this.data[index], this.data[parenIndex]) < 0) {
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
        this.compartor(this.data[leftIndex], this.data[findIndex]) < 0
      ) {
        findIndex = leftIndex
      }

      if (
        rightIndex <= lastIndex &&
        this.compartor(this.data[rightIndex], this.data[findIndex]) < 0
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


const heapArr = getRandomArr();
console.log('before heapArr ===>', heapArr);
const len = heapArr.length;
const minHeap = new Heap(heapArr)
const resHeapArr = []
for (let i = 0; i < len; i++) {
	resHeapArr.push(minHeap.poll())
}
console.log('after heapArr ===>', resHeapArr)

// 8. 计数排序

// 9. 桶排序

// 10.基数排序
