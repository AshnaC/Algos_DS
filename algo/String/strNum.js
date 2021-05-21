var myAtoi = function (s) {
    s = s.trim();
    let sign = 1;
    let val = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== " " && !isNaN(s[i])) {
            val = val * 10 + Number(s[i]);
        } else {
            if (i == 0 && (s[0] === "-" || s[0] === "+")) {
                sign = Number(s[0] + 1);
                continue;
            }
            break;
        }
    }
    // Handling upper bound as leet-code
    if (val >= 2 ** 31) {
        val = 2 ** 31;
        if (sign === 1) {
            val--;
        }
    }
    return val * sign;
};

//https://leetcode.com/problems/string-to-integer-atoi/submissions/
