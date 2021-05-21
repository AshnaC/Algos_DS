var lengthOfLongestSubstring1 = function (s) {
    let maxStr = s[0] || "";
    let currVal = s[0];
    for (let i = 1; i < s.length; i++) {
        let char = s[i];
        let charIndex = currVal.indexOf(char);
        if (charIndex !== -1) {
            currVal = currVal.substring(charIndex + 1);
        }
        currVal = currVal + char;
        if (currVal.length > maxStr.length) {
            maxStr = currVal;
        }
    }
    return maxStr;
};

var lengthOfLongestSubstring2 = function (s) {
    let currVal = s[0] || "";
    let maxStrLen = currVal.length;
    for (let i = 1; i < s.length; i++) {
        let char = s[i];
        let charIndex = currVal.indexOf(char);
        if (charIndex !== -1) {
            currVal = currVal.substring(charIndex + 1);
        }
        currVal = currVal + char;
        maxStrLen = Math.max(maxStrLen, currVal.length);
    }
    return maxStrLen;
};

var lengthOfLongestSubstring = function (s) {
    let maxStrLen = 0;
    let map = {};
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (map[char] !== undefined) {
            // Start of the sub string - Max of actual start and map value
            // Problem occurs because map has all the iterated element
            // and not just substring characters
            start = Math.max(map[char] + 1, start);
        }
        map[char] = i;
        let end = i + 1;
        // Length of substring i + 1 - start s.substring(start, i + 1);
        maxStrLen = Math.max(maxStrLen, end - start);
    }
    return maxStrLen;
};

console.log(lengthOfLongestSubstring3("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));
