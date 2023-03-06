/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
    const perhead = new ListNode(-1);
    let prev = perhead;
    while (list1 != null && list2 != null) {
        if (list1.val <= list2.val) {
            prev.next = list1;
            list1 = list1.next;
        }
        else {
            prev.next = list2;
            list2 = list2.next;
        }
        prev = prev.next;
    }
    prev.next = list1 === null ? list2 : list1;
    return perhead.next;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))

let set = new Set(['()']);
const s = 'helloworld';

console.log(s.slice(0, 2))