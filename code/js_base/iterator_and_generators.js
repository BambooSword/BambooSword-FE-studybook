class Counter {
  // Counter 的实例应该迭代 limit 次
  constructor(limit) {
    this.limit = limit
  }

  next() {
    let count = 1,
      limit = this.limit
    if (count <= limit) {
      return { done: false, value: count++ }
    } else {
      return { done: true, value: undefined }
    }
  }
  [Symbol.iterator]() {
    return this
  }
}

class Counter {
  // Counter 的实例应该迭代 limit 次
  constructor(limit) {
    this.limit = limit
  }

  [Symbol.iterator]() {
    let count = 1,
      limit = this.limit
    const iterator = {
      [Symbol.iterator]() {
        return iterator
      },
      next() {
        if (count <= limit) {
          return { done: false, value: count++ }
        } else {
          return { done: true, value: undefined }
        }
      },
      return() {
        console.log('Exiting early')
        return { done: true }
      },
    }
    return iterator
  }
}
// let counter = new Counter(3)
// let cIter1 = counter[Symbol.iterator]()
// console.log(cIter1[Symbol.iterator], cIter1.next(), '<====cIter1)')
// let cIter2 = cIter1[Symbol.iterator]()
// console.log(cIter1 === cIter2, cIter2.next())
// for (let i of counter) {
//   console.log(i)
// }

// let arr = ['foo', 'bar', 'baz']

// let iter1 = arr[Symbol.iterator]()

// console.log(iter1[Symbol.iterator], iter1.next())

// let iter2 = iter1[Symbol.iterator]()

// console.log(iter1 === iter2, iter2.next())

function* nTimes(n) {
  if (n > 0) {
    yield* nTimes(n - 1)
    yield n - 1
  }
}
function Times(n) {
  if (n > 0) {
    Times(n - 1)
    return n - 1
  }
}

for (const x of nTimes(3)) {
  console.log(x)
} // 0 // 1 // 2
console.log(Times(3))


