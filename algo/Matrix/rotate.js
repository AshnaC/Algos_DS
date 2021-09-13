// https://leetcode.com/problems/rotate-image/submissions/
//https://www.youtube.com/watch?v=fMSJSS7eO1w

var rotate = function (matrix) {
    let top = 0;
    let left = 0;
    let right = matrix.length - 1;
    let bottom = matrix.length - 1;

    while (right > left) {
        for (let i = 0; i < right - left; i++) {
            // Rotate till second last element in each outer square
            let temp = matrix[top][left + i];
            matrix[top][left + i] = matrix[bottom - i][left];
            matrix[bottom - i][left] = matrix[bottom][right - i];
            matrix[bottom][right - i] = matrix[top + i][right];
            matrix[top + i][right] = temp;
        }
        top++;
        left++;
        right--;
        bottom--;
    }
};
