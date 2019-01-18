/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function printLinkedList(head) {
    let currentNode = head;

    while (currentNode) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
    }
}
