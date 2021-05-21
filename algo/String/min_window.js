//https://leetcode.com/problems/minimum-window-substring/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let left = 0;
    let right = 0;
    let map = {};
    let matchedCount = 0;
    let minLen = Infinity;
    let start;
    let end;
    for (let i = 0; i < t.length; i++) {
        map[t[i]] = (map[t[i]] || 0) + 1; // Store as map
    }
    while (right < s.length) {
        let char = s[right];
        if (map[char] || map[char] === 0) {
            map[char]--;
            if (map[char] >= 0) matchedCount++; // Add macthed counts
        }
        while (matchedCount === t.length) {
            // If we find all the macthed - keep right const and increment left
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
                end = right;
            }
            if (map[s[left]] || map[s[left]] === 0) {
                map[s[left]]++;
                if (map[s[left]] > 0) matchedCount--;
            }
            left++;
        }
        right++;
    }
    return start || end + 1 ? s.substring(start, end + 1) : "";
};

console.log(minWindow("a", "aa"));
