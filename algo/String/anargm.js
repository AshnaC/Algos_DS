//https://leetcode.com/problems/valid-anagram/submissions/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1;
    }
    for (let i = 0; i < t.length; i++) {
        if (!map[t[i]]) {
            return false;
        }
        map[t[i]] = map[t[i]] - 1;
    }
    return true;
};

//https://leetcode.com/problems/group-anagrams/submissions/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = {};
    for (let str of strs) {
        let sorted = [...str].sort();
        map[sorted] ? map[sorted].push(str) : (map[sorted] = [str]);
    }
    return Object.values(map);
};
