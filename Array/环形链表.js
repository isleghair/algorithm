/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let slow = head;
    let fast = head;
    while (fast != null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast)  // 快指针追上慢指针的时候即判断有环
            return true;
    }
    return false;
};