/**
 * @param {number[][]} intervals
 * @return {number}
 */

//https://leetcode.com/problems/non-overlapping-intervals/submissions/
//https://www.youtube.com/watch?v=BTObFnHbD4U

var eraseOverlapIntervals = function (intervals) {
    let count = 0;
    let left = 0;
    let right = 1;

    intervals = intervals.sort((a, b) => a[0] - b[0]);

    console.log(intervals);

    while (right < intervals.length) {
        let [leftStart, leftEnd] = intervals[left];
        let [rightStart, rightEnd] = intervals[right];

        // No overlap

        if (rightStart >= leftEnd) {
            left = right;
            right = right + 1;
            continue;
        }

        // Overlap

        // Partial overlap
        if (rightStart < leftEnd && rightEnd > leftEnd) {
            // Remove right entry - it will have potentally more overlaps
            right++;
            count++;
            continue;
        }

        // full overlap of right with left - right is smaller for fll over lap

        if (rightEnd <= leftEnd) {
            // Remove bigger one that is left
            left = right;
            right++;
            count++;
        }
    }

    return count;
};

// Other method is sorting by end time
// Remove right if overlaps - more probable overlap
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    // Sort according to end time
    intervals = intervals.sort((a, b) => a[1] - b[1]);
    let left = intervals[0];
    let count = 0;
    for (let i = 1; i < intervals.length; i++) {
        let [leftStart, leftEnd] = left;
        let [rightStart, rightEnd] = intervals[i];
        // Overlap
        if (rightStart < leftEnd) {
            count++; // Remove right
        } else {
            // Not removed left move to current
            left = intervals[i];
        }
    }
    return count;
};
