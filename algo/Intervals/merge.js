/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

//https://leetcode.com/problems/merge-intervals/submissions/
var merge1 = function (intervals) {
    // Sort intervals
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    // To keep tracko f currentt merged element
    // Start with first element updated up on merge and to previous dealth element
    let merge = intervals[0];
    let res = [];
    let [newStart, newEnd] = merge;
    for (let i = 1; i < intervals.length; i++) {
        let [start, end] = intervals[i];

        // Merge Totally before current
        if (newEnd < start) {
            // Add merge to res
            res.push([newStart, newEnd]);

            // Reset merge as this element -
            // since we have to check its overlap with next interval
            newStart = start;
            newEnd = end;
        } else {
            // Overlaps
            newStart = Math.min(newStart, start);
            newEnd = Math.max(newEnd, end);
        }
    }

    res.push([newStart, newEnd]);
    return res;
};

//https://www.youtube.com/watch?v=44H3cEC2fFM

var merge = function (intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0]);

    let output = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let [start, end] = intervals[i];

        let lastEnd = output[output.length - 1][1];
        //Overlap
        if (start <= lastEnd) {
            output[output.length - 1][1] = Math.max(lastEnd, end);
        } else {
            output.push(intervals[i]);
        }
    }
    return output;
};
