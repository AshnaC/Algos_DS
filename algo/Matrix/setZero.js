//https://leetcode.com/problems/set-matrix-zeroes/

var setZeroes = function (matrix) {
    let rows = []; // To track if the corresponding row is to be set 0
    let cols = []; // To track if the corresponding col is to be set 0
    let len = matrix.length;
    let bre = matrix[0].length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < bre; j++) {
            if (matrix[i][j] == 0) {
                rows[i] = 0;
                cols[j] = 0;
            }
        }
    }

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < bre; j++) {
            if (rows[i] === 0 || cols[j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
};

var setZeroes = function (matrix) {
    // Using O(1) space
    // Update first col and row of matrix with the state of entire col/row
    let len = matrix.length;
    let bre = matrix[0].length;
    let firstRow = false; // If first roww is to be zero
    // It coincides with the posiiton of first col
    // So different variable

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < bre; j++) {
            if (matrix[i][j] == 0) {
                matrix[0][j] = 0; // Update col values in first row
                if (i === 0) {
                    firstRow = true; // Found in first row, so that row is denoted 0
                } else {
                    matrix[i][0] = 0; // Row values of first col
                }
            }
        }
    }

    // Staring from 1, 1 beacuse 0,0 will override first row/col values
    for (let i = 1; i < len; i++) {
        for (let j = 1; j < bre; j++) {
            if (matrix[0][j] === 0 || matrix[i][0] == 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if (matrix[0][0] == 0) {
        // Update first col values
        for (let i = 0; i < len; i++) {
            matrix[i][0] = 0;
        }
    }

    // Update first row values
    if (firstRow) {
        for (let i = 0; i < bre; i++) {
            matrix[0][i] = 0;
        }
    }
};
