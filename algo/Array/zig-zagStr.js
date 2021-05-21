var convert = function (s, numRows) {
    // Create each bucket for each row
    // Iterate through string and add to each row
    // Reverse direction when reached 0 or numsRow
    //PAYPALISHIRING
    // [P] [AP] [Y]
    let arr = [];
    let row = 0;
    let delta = -1;
    for (let i = 0; i < s.length; i++) {
        arr[row] = (arr[row] || "") + s[i];
        if (row === 0 || row === numRows - 1) {
            delta = delta * -1;
            //Reverse direction of row itteration
        }
        row = row + delta;
    }
    console.log(arr);
};
