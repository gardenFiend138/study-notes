/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {
    let currentNode = head;
    const newNode = new SinglyLinkedListNode(data);

    if (!head) {
        newNode.next = null;
        return newNode;
    }

    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    return head;
}
