let maxLen = 0;
let first = 0;
let last = 0;

var longestPalindrome = function (s) {
    debugger;
    for (let i = 0; i < s.length; i++) {
        let left = i;
        let right = i;
        // Odd - expand from one char
        expand(s, left, right, maxLen);
        right = i + 1;
        // Even - expand from two char
        expand(s, left, right, maxLen);
    }
    return s.substring(first, last + 1);
};

var expand = (s, left, right) => {
    while (left >= 0 && right < s.length) {
        if (s[left] !== s[right]) {
            break;
        }
        const strLen = right - left + 1;
        if (strLen > maxLen) {
            first = left;
            last = right;
            maxLen = strLen;
        }
        left--;
        right++;
    }
};

// longestPalindrome("aaa");

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let strippedString = s.replace(/[^a-zA-Z0-9$]/gi, "").toLowerCase();
    let left = 0;
    let right = strippedString.length - 1;
    while (right > left) {
        if (strippedString[right] !== strippedString[left]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

//Count pallindrome
//https://leetcode.com/problems/palindromic-substrings/submissions/

let count = 0;
var countSubstrings = function (s) {
    for (let i = 0; i < s.length; i++) {
        expandAround(i, i, s);
        expandAround(i, i + 1, s);
    }
    return count;
};

const expandAround = (left, right, s) => {
    while (left >= 0 && right < s.length) {
        if (s[left] === s[right]) {
            count++;
            left--;
            right++;
        } else {
            break;
        }
    }
};

console.log(countSubstrings("aaa"));
