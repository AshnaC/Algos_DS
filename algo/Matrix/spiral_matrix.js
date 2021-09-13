// https://leetcode.com/problems/spiral-matrix/
//https://www.youtube.com/watch?v=BJnMZNwUk1M
// Go top to right to bottom to left
// Changing bounds

var spiralOrder = function (matrix) {
    let result = [];
    let height = matrix.length;
    let width = matrix[0].length;
    let top = 0;
    let right = width - 1;
    let bottom = height - 1;
    let left = 0;

    while (result.length < height * width) {
        // top right

        // Top to right
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        if (result.length === height * width) {
            // Handling single col matrix
            break;
        }

        for (let i = right; i >= left; i--) {
            result.push(matrix[bottom][i]);
        }
        bottom--;

        for (let i = bottom; i >= top; i--) {
            result.push(matrix[i][left]);
        }
        left++;
    }

    return result;
};
