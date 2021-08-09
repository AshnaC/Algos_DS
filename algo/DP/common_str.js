/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// https://leetcode.com/problems/longest-common-subsequence/submissions/
var longestCommonSubsequence = function (text1, text2) {
    let map = {};
    let max = 0;
    const traverse = (i, j) => {
        // console.log(map)
        let key = i + "_" + j;
        if (map[key] != undefined) {
            return map[key];
        }
        if (i > text1.length - 1 || j > text2.length - 1) {
            return 0;
        }
        let count = 0;
        if (text1[i] == text2[j]) {
            count = 1 + traverse(i + 1, j + 1);
        } else {
            count = Math.max(traverse(i + 1, j), traverse(i, j + 1));
        }
        map[key] = count;
        max = Math.max(max, count);
        return count;
    };
    traverse(0, 0);
    return max;
};

// DP Solution
//https://www.youtube.com/watch?v=Ua0GhsJSlWM
var longestCommonSubsequence = function (text1, text2) {
    let map = {};
    for (let i = text1.length - 1; i >= 0; i--) {
        for (let j = text2.length - 1; j >= 0; j--) {
            if (text1[i] === text2[j]) {
                map[i + "_" + j] = (map[i + 1 + "_" + (j + 1)] || 0) + 1;
            } else {
                map[i + "_" + j] = Math.max(map[i + 1 + "_" + j] || 0, map[i + "_" + (j + 1)] || 0);
            }
        }
    }

    return map[0 + "_" + 0];
};
