// tree = converBinaryTree(readline());

function convertBinaryTree(arr) {
  let root
  let insertNode = function (parentNode, childNode) {
    if (!childNode || childNode.val == '') return
    if (childNode.val < parentNode.val) {
      if (parentNode.left === null) {
        parentNode.left = childNode
      } else {
        insertNode(parentNode.left, childNode)
      }
    } else {
      if (parentNode.right === null) {
        parentNode.right = childNode
      } else {
        insertNode(parentNode.right, childNode)
      }
    }
  }
  arr.forEach(val => {
    let node = {
      val,
      left: null,
      right: null,
    }
    if (root) {
      insertNode(root, node)
    } else {
      root = node
    }
  })
  return root
}
console.log([1, , 2, 4])
const binaryTree = convertBinaryTree([1, , 2, 3])

// 前序遍历

function aheadSearch(binaryTree) {
  if (!binaryTree) return '';
  if (binaryTree.left === null && binaryTree.right === null)
    return binaryTree.val
  return (
    binaryTree.val +
    '' +
    aheadSearch(binaryTree.left) +
    aheadSearch(binaryTree.right)
  )
}
console.log(aheadSearch(binaryTree));
