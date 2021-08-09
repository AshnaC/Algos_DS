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

// MERGE K SORTED LINKED LISTS
// https://www.youtube.com/watch?v=kpCesr9VXDA

// https://leetcode.com/problems/merge-two-sorted-lists/
// Two pointers
// Intialise l3 as an object to pass node by its reference
// Put next values to node till one is exhausted
// The next value if l1 || l2

//  https://leetcode.com/problems/merge-k-sorted-lists/submissions/
//  Push the values to an array
//  Sort it
//  Make an object back out of the sorted list
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

// Divide and Conquer
// Merge EVERY two list at a time
// Merging the resulted lists again
// Till there is only one list
var mergeKLists = function (lists) {
    if (!lists || !lists.length) {
        return null;
    }

    while (lists.length > 1) {
        let mergedList = [];
        for (let i = 0; i < lists.length; i = i + 2) {
            let merged = mergeTwo(lists[i], lists[i + 1]);
            mergedList.push(merged);
        }
        lists = mergedList;
    }
    return lists[0] || null;
};

const mergeTwo = (l1, l2) => {
    let l3 = { next: null };
    let node = l3;
    while (l1 && l2) {
        if (l1.val > l2.val) {
            node.next = { val: l2.val, next: null };
            l2 = l2.next;
        } else {
            node.next = { val: l1.val, next: null };
            l1 = l1.next;
        }
        node = node.next;
    }

    node.next = l1 || l2;
    return l3.next;
};

// Consider all the list
// Take min value - update the min list element to next node
// Repeat till all nodes are over

var mergeKLists = function (lists) {
    let l3 = { next: null };
    let node = l3;
    lists = lists.filter(item => item);
    while (lists.length) {
        let minIndex = 0;
        for (let i = 1; i < lists.length; i++) {
            let list = lists[i];
            if (list.val <= lists[minIndex].val) {
                minIndex = i;
            }
        }
        node.next = { val: lists[minIndex].val, next: null };
        node = node.next;
        lists[minIndex] = lists[minIndex].next;
        lists = lists.filter(item => item);
    }
    return l3.next;
};
