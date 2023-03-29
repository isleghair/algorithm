/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode (val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    let slow = head, fast = head.next;
    if (head.val === val)
        return head.next;
    while (fast !== null) {
        if (fast.val === val) {
            slow.next = fast.next;
            return head;
        }
        slow = slow.next;
        fast = fast.next;
    }
};