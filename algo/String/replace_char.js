/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let max_char_count = 0;
    let left = 0; // Left pointer
    let right = 0; // Right pointer
    let countMap = {}; // Map to keep count
    while (right < s.length) {
        let last_char = s[right];
        countMap[last_char] = (countMap[last_char] || 0) + 1; // Increase count
        max_char_count = Math.max(countMap[last_char], max_char_count);
        // Update max char count
        // * Increment right till different character's can be replaced
        // * After that increase left also
        if (right - left + 1 - max_char_count > k) {
            // By adding the given char in iteration, we cannot replace all
            // Slide window to right - We move left to one step
            countMap[s[left]]--;
            left++;
        }
        right++;
    }
    // The window width -1 will always have the largest possible string
    // since we attain first max before slide happens
    return right - left;
};

characterReplacement("AACAABABBA", 2);
