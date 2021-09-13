/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

//https://leetcode.com/problems/merge-intervals/submissions/
var merge = function (intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0]);

    let newStart = intervals[0][0];
    let newEnd = intervals[0][1];
    let ans = [];

    for (let i = 1; i < intervals.length; i++) {
        let [start, end] = intervals[i];
        if (newEnd >= start) {
            //Overlaps - merge
            newEnd = Math.max(end, newEnd);
        } else {
            ans.push([newStart, newEnd]);
            newStart = start;
            newEnd = end;
        }
    }

    ans.push([newStart, newEnd]);
    return ans;
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
