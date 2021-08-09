// https://leetcode.com/problems/insert-interval/
// https://www.youtube.com/watch?v=A8NUOmlwOlM

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let [newStart, newEnd] = newInterval;
    let result = [];
    for (let i = 0; i < intervals.length; i++) {
        let [start, end] = intervals[i];
        // If iterval lies totally before current
        // Push interval to result along with rest of the elements
        if (newEnd < start) {
            result = [...result, [newStart, newEnd], ...intervals.slice(i)];
            return result;
        }
        // If interval lies totally after current - push current interval to result;
        if (newStart > end) {
            result.push(intervals[i]);
        } else {
            // There is overlap - so merge the two interval and set that as new Interval
            // We cannot push it now
            // because we dont know if there are other overlapping intervals
            // If there is no merge - the result will return from first if condition
            // Else further merge takes place in this loop
            // If return from first if doesnot take place ever -
            // we need to push new interval to result at the end
            newStart = Math.min(newStart, start);
            newEnd = Math.max(newEnd, end);
        }
    }
    result.push([newStart, newEnd]);
    return result;
};
