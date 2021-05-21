// https://www.youtube.com/watch?v=354J83hX7RI
// https://leetcode.com/problems/linked-list-cycle/submissions/
// Start two pointers
// One slow - jumping onr step at a time and
// other fast - jumping 2 steps at a time
// If cycle they must meet

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let slow = head;
    let fast = head;
    while (fast) {
        slow = slow.next;
        fast = fast.next && fast.next.next;
        if (slow && slow === fast) {
            return true;
        }
    }
    return false;
};

// https://www.youtube.com/watch?v=QfbOhn0WZ88
// https://leetcode.com/problems/linked-list-cycle-ii/submissions/
// Find the starting point of cycle
// First check if cycle
// If there is  a cycle ,Start another pointer at head
// The slow and new pointer must meet at the starting point of new cycle
// Its math

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let fast = head;
    let slow = head;
    while (fast) {
        slow = slow.next;
        fast = fast.next && fast.next.next;
        if (slow && slow === fast) {
            console.log("Cycle");
            let start = head;
            while (slow !== start) {
                start = start.next;
                slow = slow.next;
            }
            return start;
        }
    }
    return null;
};
