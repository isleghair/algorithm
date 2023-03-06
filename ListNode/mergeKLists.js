/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function ListNode (val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var mergeKLists = function (lists) {
    const mergeTwoLists = function (list1, list2) {
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
    }

    const ans = null;
    for (let i = 0; i < lists.length; i++) {
        ans = mergeTwoLists(ans, lists[i])
    }
    return ans;
};

var function1 = function () {
    return "I'm function1"
}

var function2 = function () {
    console.log(function1() + " I'm function2");
}

function2();
