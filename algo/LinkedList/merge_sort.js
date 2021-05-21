/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let l3 = { next: null };
    let node = l3;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            node.next = l1;
            l1 = l1.next;
        } else {
            node.next = l2;
            l2 = l2.next;
        }
        node = node.next;
    }
    node.next = l1 || l2;
    return l3.next;
};

// https://leetcode.com/problems/merge-two-sorted-lists/
// Two pointers
// Intialise l3 as an object to pass node by its reference
// Put next values to node till one is exhausted
// The next value if l1 || l2

var mergeKLists = function (lists) {
    let arr = lists.reduce((acc, list) => {
        while (list) {
            acc.push(list.val);
            list = list.next;
        }
        return acc;
    }, []);
    arr = arr.sort((a, b) => a - b);
    let l1 = { next: null };
    let node = l1;
    arr.forEach(elt => {
        node.next = { val: elt, next: null };
        node = node.next;
    });
    return l1.next;
};

//  Push the values to an array
//  Sort it
//  Make an object back out of the sorted list
//  https://leetcode.com/problems/merge-k-sorted-lists/submissions/
