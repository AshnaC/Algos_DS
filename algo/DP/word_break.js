var wordBreak = function (s, wordDict, dict = {}) {
    let set = new Set(wordDict);
    if (!s) {
        return true;
    }
    if (dict[s] !== undefined) {
        // Memoization
        return dict[s];
    }
    for (let i = 0; i < s.length; i++) {
        part = s.substring(0, i + 1);
        if (set.has(part) && wordBreak(s.substring(i + 1), wordDict, dict)) {
            dict[s] = true;
            return true;
        }
    }
    dict[s] = false;
    return false;
};

// https://leetcode.com/problems/word-break/submissions/
// Recursion with memoization
// Go through words of length from 0 tp length of string
// Check if they belong in wordDict
// use memoization in dict to remove duplicate computation
// https://www.youtube.com/watch?v=1U4jQusbeJc
// https://www.youtube.com/watch?v=hLQYQ4zj0qg

var wordBreak = function (s, wordDict) {
    let set = new Set(wordDict);
    let dp = [];
    // dp tracks if string with len == index can be made from wordDict
    dp[0] = true;
    for (let len = 1; len <= s.length; len++) {
        dp[len] = false;
        for (let i = 0; i < len; i++) {
            const wordsInDict = dp[i] && set.has(s.substring(i, len));
            if (wordsInDict) {
                dp[len] = true;
                break;
            }
        }
    }
    return dp[s.length];
};

// Using Dynamic Programming
// Determine the string with len 0 to s.length satisfies condition
// This is done by checking the already calculated value of earlier strings
// Whenever we find a match with any combination break
// "leetcode"
// ["leet","code"]
