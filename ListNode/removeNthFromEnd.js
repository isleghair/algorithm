/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let slow = head, fast = head;
    while (n--) {
        fast = fast.next;
    }
    if (!fast) {
        return head;
    }
    while (!fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
};

console.log(removeNthFromEnd())

