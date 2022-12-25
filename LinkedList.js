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
        this.HEAD = new Node(value, this.HEAD);
    }

    size() {
        let numberOfNodes = 1;
        if (this.HEAD == null) {
            return 0;
        }

        if ((Object.keys(this.HEAD)[0] == 'value') && (this.HEAD.next == null)) {
            return 1;
        }

        let lastNode = this.HEAD;
        while (!(lastNode.next == null)) {
            numberOfNodes += 1;
            lastNode = lastNode.next;
        }

        return numberOfNodes;

    }

    head() {
        if (this.HEAD == null) {
            return 'it is an empty list';
        }

        return this.HEAD;
    }

    tail() {
        if (this.HEAD == null) {
            console.error('can not get tail of  an empty list');
            return;
        }

        let lastNode = this.HEAD;
        while (!(lastNode.next == null)) {
            lastNode = lastNode.next;
        }
        return lastNode;
    }

    at(index) {
        if (index < 0) {
            console.error('negative index not accepted')
            return;
        }

        if (this.HEAD == null) {
            console.error('index out of bound');
            return;
        }

        let listNode = this.HEAD;
        for (let i = 0; i < index; i += 1) {
            if (listNode.next == null) {
                console.error('index out of bound');
                return;
            } else {
                listNode = listNode.next;
            }
        }

        return listNode;
    }

    pop() {
        if (this.HEAD = null) {
            console.error('it is an empty list');
            return;
        }

        let listNode = this.HEAD;
        let listNodeIndex = 0;
        while (!(listNode.next == null)) {
            listNode = listNode.next;
            listNodeIndex += 1;
        }


    }

}

const myLinkedList = new LinkedList();
myLinkedList.appendValue(15);
myLinkedList.appendValue(25);
myLinkedList.appendValue(100);
myLinkedList.appendValue(150);
myLinkedList.appendValue(200);
myLinkedList.prepend(10);
console.log(myLinkedList.at(0));

