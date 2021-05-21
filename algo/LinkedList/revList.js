// https://leetcode.com/problems/reverse-linked-list/submissions/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let node = head;
    let prev = null;

    while (node) {
        let temp = node.next;
        node.next = prev;
        prev = node;
        node = temp;
    }

    return prev;
};

// 1->2->3->4
//1st
// temp = 2
// 1 -> null
// pev = 1 -> null
// node = 2->3

//2nd
// temp = 3->4
// 2->1-> null
// pev =  // 2->1-> null
// node = 3 ->
