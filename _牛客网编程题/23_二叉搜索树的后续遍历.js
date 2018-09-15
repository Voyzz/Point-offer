
function Node(key) {
  this.key = key
  this.left = null
  this.right = null
}

let root = null

// 插入元素
// 实现思路：至顶向下插入，先判断顶点是否为空；顶点为空则直接在该处插入，若不为空，则通过比较顶点的 key 和插入元素的 key 判断该插入到顶点的左侧还是右侧，后面进行如上递归
this.insert = function(key) {
  const node = new Node(key)
  if (root === null) {
    root = node
  } else {
    insertNode(root, node)
  }
  function insertNode(parent, node) {
    if (parent.key > node.key) {
      if (parent.left === null) {
        parent.left = node
      } else {
        insertNode(parent.left, node)
      }
    } else if (parent.key < node.key) {
      if (parent.right === null) {
        parent.right = node
      } else {
        insertNode(parent.right, node)
      }
    }
  }
}

// 中序遍历
this.inOrderTraverse = function(cb) {
  inOrderTraverse(root, cb)
  function inOrderTraverse(node, cb) {
    if (node) {
      inOrderTraverse(node.left, cb)
      cb(node.key)
      inOrderTraverse(node.right, cb)
    }
  }
}




var tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)