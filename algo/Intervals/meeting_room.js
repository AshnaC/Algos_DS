// Sorting by end
const isOverlapping = intervals => {
    intervals = intervals.sort((a, b) => a[1] - b[1]);
    for (let i = 1; i < intervals.length; i++) {
        let [leftStart, leftEnd] = intervals[i - 1];
        let [rightStart, rightEnd] = intervals[i];
        if (rightStart < leftEnd) {
            return false;
        }
    }
    return true;
};

// Sorting by start
const isOverlapping2 = intervals => {
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 1; i < intervals.length; i++) {
        let [leftStart, leftEnd] = intervals[i - 1];
        let [rightStart, rightEnd] = intervals[i];
        if (rightStart < leftEnd) {
            return false;
        }
    }
    return true;
};
