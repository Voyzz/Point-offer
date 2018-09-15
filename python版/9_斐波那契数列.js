function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

function LList() {
    this.head = new Node("head");
    this.find = find;  // 查找指定结点
    this.insert = insert;  // 在item后面插入一个结点
    this.display = display;  // 从头到尾打印链表
    this.remove = remove;  // 移除一个结点
    this.findLast = findLast;  // 找到链表中的最后一个结点
    this.dispReverse = dispReverse;  // 反转双向链表
}

// 反转双向链表
function dispReverse() {
    var currNode = this.head;
    currNode = this.findLast();
    while (!(currNode.previous == null)) {
        print(currNode.element);
        currNode = currNode.previous;
    }
}

// 找到链表中的最后一个结点
function findLast() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        currNode = currNode.next;
    }
    return currNode;
}

// 移除一个结点
function remove(item) {
    var currNode = this.find(item);
    if (!(currNode.next == null)) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}

//findPrevious 没用了，注释掉
/*function findPrevious(item) {
    var currNode = this.head;
    while (!(currNode.next == null) && (currNode.next.element != item)) {
        currNode = currNode.next;
    }
    return currNode;
}*/

// 从头到尾打印链表
function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        print(currNode.next.element);
        currNode = currNode.next;
    }
}

// 查找指定结点
function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

// 在item后面插入一个结点
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
}

//
var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display(); //
print();
cities.remove("Carlisle");
cities.display();  //
print();
cities.dispReverse();  //

//打印结果：
Conway
Russellville
Carlisle
Alma

Conway
Russellville
Alma

Alma
Russellville
Conway