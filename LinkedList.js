import Node from "./Node.js";

class LinkedList {
    constructor() {
        this.HEAD = null
    }

    appendValue(value) {
        if (this.HEAD == null) {
            const newNode = new Node(value, null);
            this.HEAD = newNode;

        } else {
            let lastNode = this.HEAD;
            while (!(lastNode.next == null)) {
                lastNode = lastNode.next;
            }
            lastNode.next = new Node(value, null);
        }

    }

    prepend(value) {
        this.HEAD = new Node(value, this.HEAD.next);
    }

}

const myLinkedList = new LinkedList();
myLinkedList.appendValue(18);
myLinkedList.appendValue(25);
myLinkedList.appendValue(100);
myLinkedList.appendValue(150);
myLinkedList.appendValue(200);
myLinkedList.prepend(10);
console.log(myLinkedList.HEAD);

