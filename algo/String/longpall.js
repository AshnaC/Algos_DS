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

var longestPalindrome = function (s) {
    const expand = (left, right) => {
        while (left >= 0 && right < s.length) {
            if (s[left] == s[right]) {
                left--;
                right++;
            } else {
                break;
            }
        }
        right--;
        left++;
        let len = right - left + 1;
        if (len > str.length) {
            str = s.substring(left, right + 1);
        }
    };

    let str = "";
    for (let i = 0; i < s.length; i++) {
        expand(i, i);
        expand(i, i + 1);
    }

    return str;
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

//DP
var longestPalindrome = function (s) {
    let map = {};
    let maxStrLen = 0;
    let start = 0;
    let end = 0;

    // Considering the length of substring
    // Starts from 0 to length s.length
    // For all len 0 - single char it is always palindrome
    // For len -1 - compare the two chars in both end j,j+1
    // j defines the start of string, j+i refers the end of the string
    // For len > 2 - compare the two chars in both end and string in between
    // which is map[j+1 , i+j-1]
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j <= s.length - 1 - i; j++) {
            let key = j + "_" + (j + i);
            if (i == 0) {
                map[key] = true;
            } else if (i == 1) {
                map[key] = s[j] === s[j + i];
            } else {
                let lastKey = j + 1 + "_" + (j + i - 1);
                map[key] = map[lastKey] && s[j] === s[j + i];
            }

            if (map[key] && i + 1 > maxStrLen) {
                maxStrLen = i + 1;
                start = j;
                end = j + i;
            }
        }
    }
    return s.substring(start, end + 1);
};
