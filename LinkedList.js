import Node from "./Node.js";

class LinkedList {
    constructor() {
        this.HEAD = null
    }

    append(value) {
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
                // console.error('index out of bound');
                return;
            }
            listNode = listNode.next;
        }

        return listNode;
    }

    pop() {
        if (this.size() == 0) {
            console.error('it is an empty list');
            return;
        }

        if (this.size() == 1) {
            this.HEAD = null;
            return;
        }

        const beforeTailIndex = this.size - 2;
        this.at(beforeTailIndex).next = null;
    }

    contains(value) {
        if (this.HEAD == null) {
            console.error('it is an empty list');
            return;
        }

        if (this.HEAD.value == value) {
            return true;
        }

        let currentNode = this.HEAD;
        while (!(currentNode.next == null)) {
            currentNode = currentNode.next;
            if (currentNode.value == value) {
                return true;
            }
        }

        return false;

    }

    find(value) {
        if (!this.contains(value)) {
            return null;
        }

        let currentNode = this.HEAD;
        let currentNodeIndex = 0;
        while (!(currentNode.value == value)) {
            currentNode = currentNode.next;
            currentNodeIndex += 1;
        }

        return currentNodeIndex;

    }

    toString() {
        if (this.HEAD == null) {
            return '';
        }

        let currentNode = this.HEAD;
        let linkedListAsString = `(${currentNode.value})`;
        if (currentNode.next == null) {
            return linkedListAsString;
        }

        while (!(currentNode.next == null)) {
            currentNode = currentNode.next;
            linkedListAsString += `->(${currentNode.value})`;
        }

        return linkedListAsString + '-> null';
    }

    insertAt(value, index) {
        if (index > (this.size()) || index < 0) {
            console.error('index out of bounds');
            return;
        }

        if (index == 0) {
            this.prepend(value);
            return;
        }
        if (index == this.size()) {
            this.append(value);
            return;
        }

        const currentNodeAtTheIndex = this.at(index);
        const beforeCurrentNodeAtTheIndex = this.at(index - 1);
        beforeCurrentNodeAtTheIndex.next = new Node(
            value
            , currentNodeAtTheIndex
        );

    }

    removeAt(index) {
        if ((index > (this.size - 1)) || (index < 0)) {
            console.error('index is out of bounds');
            return;
        }

        if (index == (this.size - 1)) {
            this.pop();
            return;
        }
        if (index == 0) {
            this.HEAD = this.at(1);
            return;
        }
        const beforeCurrentNodeAtTheIndex = this.at(index - 1);
        const afterCurrentNodeAtTheIndex = this.at(index + 1);
        beforeCurrentNodeAtTheIndex.next = afterCurrentNodeAtTheIndex;
    }

}

const myLinkedList = new LinkedList();
myLinkedList.append(15);
myLinkedList.append(25);
// myLinkedList.append(100);
// myLinkedList.append(150);
// myLinkedList.append(200);
// myLinkedList.append('emilie');
// //myLinkedList.append(200);
//myLinkedList.insertAt(200, 2);
myLinkedList.removeAt(0);
console.log(myLinkedList.toString());

