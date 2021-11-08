// function isEffectiveBrackets(str) {
//   const strArr = str.split('')
//   const stack = []
//   const map = {
//     ')': '(',
//     ']': '[',
//     '}': '{',
//   }
//   for (let i = 0; i < strArr.length; i++) {
//     const item = strArr[i]
//     if (item === ')' && stack.pop() !== map[item]) {
//       return false
//     }
//     if (item === ']' && stack.pop() !== map[item]) {
//       return false
//     }
//     if (item === '}' && stack.pop() !== map[item]) {
//       return false
//     }
//     if (!map[item]) {
//       stack.push(item)
//     }
//   }
//   if (stack.length === 0) return true
//   return false
// }

function isValid(str) {
  const arrStr = str.split('')
  const stack = []
  const map = {
    ')': '(',
    ']': '[',
    '}': '{',
  }
  for (let i = 0; i < arrStr.length; i++) {
    const item = arrStr[i]
    if (arrStr[i] === ')' && map[item] !== stack.pop()) {
      return false
    }
    if (arrStr[i] === ']' && map[item] !== stack.pop()) {
      return false
    }
    if (arrStr[i] === '}' && map[item] !== stack.pop()) {
      return false
    }
    if (!map[item]) {
			stack.push(item)
    }
  }
  if (stack.length === 0) return true
  return false
}
const res = isValid('({[]})')
const res1 = isValid('({[)})')
console.log(res)
console.log(res1)
