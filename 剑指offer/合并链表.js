/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let head = new ListNode(-1);
    let cur = head;
    while (l1 !== null && l2 !== null) {
        if (l1val <= l2.val) {
            cur.next = l1;
            l1 = l1.next;
        }
        else {
            cur.next = l2;
            l2 = l2.next;
        }
    }
    cur.next = l1 === null ? l2 : l1;
    return head;
};