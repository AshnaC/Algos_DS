var hammingWeight = function (n) {
    let count = 0;
    while (n) {
        count = count + (n & 1);
        n = n >>> 1; // Unsigned right shift
    }
    return count;
};

//https://stackoverflow.com/questions/2811319/difference-between-and
//https://leetcode.com/problems/number-of-1-bits/s

var hammingWeight = function (n) {
    let count = 0;
    while (n) {
        count++;
        n = n & (n - 1); // Bitwise operator removes the last bit (1) present in n
    }
    return count;
};

//https://leetcode.com/problems/number-of-1-bits/discuss/1044775/Python-n-and-(n-1)-trick-%2B-even-faster-explained
