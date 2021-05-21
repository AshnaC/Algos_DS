/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
//https://leetcode.com/problems/reorder-list/

var reorderList = function (head) {
    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let lastNode = slow.next;
    slow.next = null;

    let prev = null;

    while (lastNode) {
        let temp = lastNode.next;
        lastNode.next = prev;
        prev = lastNode;
        lastNode = temp;
    }

    let rev = prev;

    let first = head;
    let second = rev;
    // console.log(first)
    // console.log(second)

    let l3 = { next: null };
    let node = l3;
    while (first && second) {
        node.next = first;
        first = first.next;
        node.next.next = second;
        second = second.next;
        node = node.next.next;
    }
    node.next = first || second;
    return l3.next;
};

// Get last half node
// Reverse last half node
// Merge them
