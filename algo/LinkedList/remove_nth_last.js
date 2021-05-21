// Two pointers
// First goes ahead by n steps
// After that 2 nd pointer starts
// Now both moves in equal interval
// When first pointer reaches the end
// Remove the next of second pointer
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/submissions/

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let k = n;
    let first = head;
    let second = head;
    while (k !== 0) {
        first = first.next;
        k--;
    }
    if (first) {
        while (first.next) {
            second = second.next;
            first = first.next;
        }
        second.next = (second.next && second.next.next) || null;
        return head;
    }
    // No first means end of list is reached
    //and it is the first element to be removed
    return head.next;
};
