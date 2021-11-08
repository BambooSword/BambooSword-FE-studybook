function ListNode(val) {
  this.val = val
  this.next = null
}

function generateList(array) {
  let fakeHead = new ListNode(0)
  let current = fakeHead

  for (let index = 0; index < array.length; index++) {
    current.next = { val: array[index], next: null }
    current = current.next
  }

  return fakeHead.next
}

function generateArray(list) {
  let res = []
  while (list) {
    res.push(list.val)
    list = list.next
  }
  return res
}

function getSortedList(list1, list2) {
	let a1 = list1;
	let a2 = list2;
  const res = []
  while (a1 && a2) {
    if (a1.val <= a2.val) {
      res.push(a1.val)
      a1 = a1.next
    } else {
      res.push(a2.val)
      a2 = a2.next
    }
  }
  while (a1) {
    res.push(a1.val)
    a1 = a1.next
  }
  while (a2) {
    res.push(a2.val)
    a2 = a2.next
  }
	return res;
}

const a1 = [1, 2, 3]
const a2 = [2, 3, 4]
const sortedListRes = getSortedList(generateList(a1), generateList(a2))

console.log(sortedListRes);


