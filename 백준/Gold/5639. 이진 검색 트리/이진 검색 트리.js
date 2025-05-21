const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

// 노드 클래스
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 반복문으로 트리에 노드 삽입
function insertIterative(root, value) {
  let current = root;
  while (true) {
    if (value < current.value) {
      if (!current.left) {
        current.left = new Node(value);
        break;
      }
      current = current.left;
    } else {
      if (!current.right) {
        current.right = new Node(value);
        break;
      }
      current = current.right;
    }
  }
}

// 후위 순회 (재귀)
function postOrder(node, result) {
  if (!node) return;
  postOrder(node.left, result);
  postOrder(node.right, result);
  result.push(node.value);
}

// 실행
const root = new Node(input[0]);
for (let i = 1; i < input.length; i++) {
  insertIterative(root, input[i]);
}

const result = [];
postOrder(root, result);
console.log(result.join('\n'));
