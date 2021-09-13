var getSum = function (a, b) {
    while (b) {
        let carry = (a & b) << 1; // And operator will have carries
        // It has to be shifted once to left to apply in next iteration
        a = a ^ b; // XOR operator performs addition
        b = carry; // For next iteration, until there is no carry
    }

    return a;
};

//https://www.youtube.com/watch?v=qq64FrA2UXQ
//https://leetcode.com/problems/sum-of-two-integers/submissions/
