// https://leetcode.com/problems/decode-ways/submissions/
// https://www.youtube.com/watch?v=qli-JCrSwuk

// With Recursion
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s, map = {}) {
    if (map[s] !== undefined) {
        return map[s];
    }
    if (s == "") {
        return 1;
    }
    if (s[0] === "0") {
        return 0;
    }
    let result = 0;
    result = numDecodings(s.substring(1), map);

    if (s.length > 1 && Number(s[0] + s[1]) < 27) {
        result = result + numDecodings(s.substring(2), map);
    }
    map[s] = result;
    return result;
};

// When string is "" - We have one successful decode
// If O is encountered - There could be no decode path there
// Take first char and decode the remaining string
// If char <= 26 (valid) - call from remaining of 2 chars

// DP - https://www.youtube.com/watch?v=cQX3yHS0cLo

var numDecodings = function (s) {
    let dp = [];
    dp[0] = 1; // Empty string one way to decode
    dp[1] = s[0] == "0" ? 0 : 1;

    for (let i = 2; i <= s.length; i++) {
        dp[i] = 0;
        // Consider rest of the string
        let oneDigit = Number(s[i - 1]);
        let twoDigit = Number(s[i - 2] + s[i - 1]);
        if (oneDigit) {
            dp[i] = dp[i - 1];
        }
        if (twoDigit && twoDigit < 27 && twoDigit > 9) {
            dp[i] = dp[i] + dp[i - 2];
        }
    }
    return dp[s.length];
};
// https://www.youtube.com/watch?v=cQX3yHS0cLo
// Take 1 st char - Take 01 pos String
// 12345 - 2 & 12
// If one digit is valid - Number of ways - Previous number of ways
// If two digit is valiD -Number of ways - 2nd from last number of ways
