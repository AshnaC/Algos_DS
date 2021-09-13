// https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/
var lengthOfLongestSubstring = function (s) {
    let start = 0;
    let end = 0;
    let length = 0;
    let map = {};
    while (end < s.length) {
        let char = s[end];
        if (map[char] != undefined && start <= map[char]) {
            start = map[char] + 1;
        }
        map[char] = end;
        end++;
        length = Math.max(length, end - start);
    }
    return length;
};

//https://leetcode.com/problems/median-of-two-sorted-arrays/

var findMedianSortedArrays = function (nums1, nums2) {
    let totalLen = nums1.length + nums2.length;
    let halfCount = Math.floor(totalLen / 2);

    let first = Math.floor(nums1.length / 2) - 1;
    let second = halfCount - first - 2;

    while (true) {
        let firstLeft = first < 0 ? Number.NEGATIVE_INFINITY : nums1[first];
        let firstRight =
            first + 1 > nums1.length - 1
                ? Number.POSITIVE_INFINITY
                : nums1[first + 1];

        let secondLeft = second < 0 ? Number.NEGATIVE_INFINITY : nums2[second];
        let secondRight =
            second + 1 > nums2.length - 1
                ? Number.POSITIVE_INFINITY
                : nums2[second + 1];

        if (firstLeft <= secondRight && secondLeft <= firstRight) {
            if (totalLen % 2 === 0) {
                return (
                    (Math.max(firstLeft, secondLeft) +
                        Math.min(firstRight, secondRight)) /
                    2
                );
            } else {
                return Math.min(firstRight, secondRight);
            }
            // Found median return
        } else if (firstLeft > secondRight) {
            first--;
            second++;
        } else if (secondLeft > firstRight) {
            second--;
            first++;
        }
    }
};

// https://leetcode.com/problems/string-to-integer-atoi/submissions/
var myAtoi = function (s) {
    s = s.trim();
    if (!s) {
        return 0;
    }
    let i = 0;
    let sign = 1;

    if (s[i] == "-") {
        sign = -1;
        i++;
    } else if (s[i] == "+") {
        sign = 1;
        i++;
    }
    let ans = 0;
    for (; i < s.length; i++) {
        let num = s[i].charCodeAt() - "0".charCodeAt();
        if (num > 9 || num < 0) {
            return sign * ans;
        }

        if (ans >= 2147483648 / 10 || ans >= (2147483648 - num) / 10) {
            return sign == 1 ? 2147483647 : -2147483648;
        }
        ans = ans * 10 + num;
    }
    return sign * ans;
};

//https://leetcode.com/problems/unique-paths-ii/
var uniquePathsWithObstacles = function (obstacleGrid) {
    let rows = obstacleGrid.length;
    let cols = obstacleGrid[0].length;

    const dfs = (r, c) => {
        let key = r + "_" + c;

        if (r >= rows || c >= cols || r < 0 || c < 0) {
            return 0;
        }
        let val = obstacleGrid[r][c];
        if (val === 1) {
            // visited[key] = false;
            return 0;
        }

        if (r === rows - 1 && c === cols - 1) {
            return 1;
        }

        let count = dfs(r + 1, c) + dfs(r, c + 1);
        return count;
    };

    let a = dfs(0, 0);
    return a;
};

//https://leetcode.com/problems/unique-paths-ii/submissions/

var uniquePathsWithObstacles = function (obstacleGrid) {
    let dp = {};
    let rows = obstacleGrid.length - 1;
    let cols = obstacleGrid[0].length - 1;
    for (let i = rows; i >= 0; i--) {
        for (let j = cols; j >= 0; j--) {
            let key = i + "_" + j;
            if (i === rows && j == cols) {
                dp[key] = obstacleGrid[i][j] === 1 ? 0 : 1;
            } else {
                if (obstacleGrid[i][j] === 1) {
                    dp[key] = 0;
                } else {
                    dp[key] =
                        (dp[i + 1 + "_" + j] || 0) +
                        (dp[i + "_" + (j + 1)] || 0);
                }
            }
        }
    }
    return dp[0 + "_" + 0];
};

//https://leetcode.com/problems/plus-one/submissions/
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] = digits[i] + 1;
        if (digits[i] < 10) {
            return digits;
        }
        digits[i] = 0;
    }

    digits.unshift(1);
    return digits;
};

//https://leetcode.com/problems/edit-distance/
//https://www.youtube.com/watch?v=XYi2-LPrwm4
var minDistance = function (word1, word2) {
    let dp = {};
    let len1 = word1.length;
    let len2 = word2.length;

    for (let i = 0; i <= len2; i++) {
        let key = len1 + "_" + i;
        dp[key] = len2 - i;
        // Fill last row
    }

    for (let i = 0; i <= len1; i++) {
        let key = i + "_" + len2;
        dp[key] = len1 - i;
        // Fill last col
    }

    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            let key = i + "_" + j;
            if (word1[i] === word2[j]) {
                dp[key] = dp[i + 1 + "_" + (j + 1)];
            } else {
                let insert = 1 + dp[i + "_" + (j + 1)];
                let del = 1 + dp[i + 1 + "_" + j];
                let replace = 1 + dp[i + 1 + "_" + (j + 1)];
                dp[key] = Math.min(insert, del, replace);
            }
        }
    }

    return dp["0_0"];
};

// 3 operations
var minDistance = function (word1, word2) {
    let dp = {};

    const getDist = (i, j) => {
        let key = i + "_" + j;
        if (dp[key]) {
            return dp[key];
        }
        let w1 = word1.slice(i);
        let w2 = word2.slice(j);

        if (!w1 || !w2) {
            dp[key] = w1.length || w2.length;
            return dp[key];
        }

        if (w1[0] == w2[0]) {
            return getDist(i + 1, j + 1);
        }
        let insert = 1 + getDist(i, j + 1);
        let del = 1 + getDist(i + 1, j);
        let replace = 1 + getDist(i + 1, j + 1);

        let operations = Math.min(insert, del, replace);
        dp[key] = operations;
        return operations;
    };

    return getDist(0, 0);
};

// brute force

var largestRectangleArea = function (heights) {
    let max = 0;

    for (let i = 0; i < heights.length; i++) {
        let min = heights[i];
        for (let j = i; j < heights.length; j++) {
            min = Math.min(min, heights[j]);
            max = Math.max(max, min * (j - i + 1));
        }
    }

    return max;
};

//https://www.youtube.com/watch?v=lsQTYlCiU6c
// O(n)
// - we maintain a stack [Start index, height] that will have rectangles
// that is going to continue till the index we are iterating
// Once that rectangle is no longer feasible - a smaller height is encountered,
// we pop it and calculate the area - till all the non feasible rectangles are removed
// The startIndex for the smaller height is the index of the last popped item

var largestRectangleArea = function (heights) {
    let stack = [];
    let max = 0;

    for (let i = 0; i < heights.length; i++) {
        let height = heights[i];
        let minIndex = heights.length; // Initiated to a high value - used to extend the width of smaller height rectangles
        while (stack.length && height < stack[stack.length - 1][1]) {
            // The last elt of stack is greater than current height - meaning the old rect expansion stops here
            // We pop till all such rectangles are removed
            let removed = stack.pop();
            let area = removed[1] * (i - removed[0]);
            minIndex = removed[0]; // To be used in next loop for small height rectangle
            max = Math.max(max, area);
        }

        if (!stack.length || height > stack[stack.length - 1][1]) {
            // Push new when a larger rectangle is encountered
            // Or when no more rectangle is there
            let newIndex = Math.min(i, minIndex);
            stack.push([newIndex, height]);
        }
    }

    while (stack.length) {
        // Iterate through the remaining rectangles - Those extend till last
        let removed = stack.pop();
        let area = removed[1] * (heights.length - removed[0]);
        max = Math.max(max, area);
    }

    return max;
};

//https://leetcode.com/problems/maximal-rectangle/submissions/
// Convert the above to vertical histogram and solve
//https://www.youtube.com/watch?v=g8bSdXCG-lA

var maximalRectangle = function (matrix) {
    if (!matrix.length || !matrix[0].length) {
        return 0;
    }
    let rows = matrix.length;
    let cols = matrix[0].length;
    let max = 0;

    let hist = [];

    const getHistArea = (hist) => {
        let stack = [];

        for (let i = 0; i < hist.length; i++) {
            let height = hist[i];
            let minIndex = hist.length;
            while (stack.length && height < stack[stack.length - 1][1]) {
                let removed = stack.pop();
                let area = removed[1] * (i - removed[0]);
                minIndex = removed[0];
                max = Math.max(max, area);
            }

            if (!stack.length || height > stack[stack.length - 1][1]) {
                let index = Math.min(minIndex, i);
                stack.push([index, height]);
            }
        }

        while (stack.length) {
            let removed = stack.pop();
            let area = removed[1] * (hist.length - removed[0]);
            max = Math.max(max, area);
        }
    };

    for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
            if (matrix[r][c] == "0") {
                hist[r] = 0;
            } else {
                hist[r] = (hist[r] || 0) + 1;
            }
        }
        getHistArea(hist);
    }

    return max;
};

// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/

var connect = function (root) {
    if (!root) {
        return null;
    }
    let queue = [root];

    while (queue.length) {
        let len = queue.length;
        let node;
        for (let i = 0; i < len; i++) {
            node = queue.shift();
            let next = queue[0];
            if (next) {
                node.next = next;
            }
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        node.next = null;
    }
    return root;
};

// O(1) - space
// https://www.youtube.com/watch?v=yl-fdkyQD8A
var connect = function (root) {
    if (!root) {
        return null;
    }

    let head = root;
    head.next = null;

    let temp = new Node(0); // Ref to blow node
    let dummy = temp; // A temp node we add to the begining of each layer
    // We update it to the next

    while (head) {
        if (head.left) {
            dummy.next = head.left;
            dummy = dummy.next;
        }
        if (head.right) {
            dummy.next = head.right;
            dummy = dummy.next;
        }
        head = head.next;

        if (head == null) {
            head = temp.next;
            temp = new Node(0);
            dummy = temp;
        }
    }

    return root;
};

//https://www.youtube.com/watch?v=h9iTnkgv05E
//https://leetcode.com/problems/word-ladder/submissions/
var ladderLength = function (beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) {
        return 0;
    }
    if (!wordList.includes(beginWord)) {
        wordList.push(beginWord);
    }

    let patternToWords = {};
    let wordToPattern = {};

    for (let word of wordList) {
        for (let i = 0; i < word.length; i++) {
            let pattern = word.substring(0, i) + "*" + word.substring(i + 1);
            patternToWords[pattern] = patternToWords[pattern] || [];
            patternToWords[pattern].push(word);
            wordToPattern[word] = wordToPattern[word] || [];
            wordToPattern[word].push(pattern);
        }
    }
    // console.log(wordToPattern,patternToWords)

    let queue = [beginWord];
    let count = 1;
    let visited = { [beginWord]: true };

    while (queue.length) {
        // BFS
        // console.log('queue', queue)
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let word = queue.shift();
            if (word === endWord) {
                return count;
            }
            for (let pattern of wordToPattern[word]) {
                let neighbours = patternToWords[pattern];
                // console.log(word, neighbours)
                for (let neWord of neighbours) {
                    if (!visited[neWord]) {
                        queue.push(neWord);
                        visited[neWord] = true;
                    }
                }
            }
        }

        count++;
    }
    return 0;
};

// https://leetcode.com/problems/surrounded-regions/submissions/
// https://www.youtube.com/watch?v=9z2BunfoZ5Y
var solve = function (board) {
    // Get all boarder regions
    let rows = board.length;
    let cols = board[0].length;

    let boarder = {};

    const getBoarders = (r, c) => {
        let key = r + "_" + c;
        if (boarder[key] !== undefined) {
            return boarder[key];
        }
        if (r < 0 || r == rows || c < 0 || c == cols) {
            return;
        }
        if (board[r][c] === "O") {
            boarder[key] = true;
            getBoarders(r + 1, c);
            getBoarders(r - 1, c);
            getBoarders(r, c - 1);
            getBoarders(r, c + 1);
        } else {
            boarder[key] = false;
        }
    };

    for (let c = 0; c < cols; c++) {
        getBoarders(0, c);
        getBoarders(rows - 1, c);
    }

    for (let r = 0; r < rows; r++) {
        getBoarders(r, 0);
        getBoarders(r, cols - 1);
    }

    // Mark all un boarder regions as X
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === "O" && !boarder[i + "_" + j]) {
                board[i][j] = "X";
            }
        }
    }
    return board;
};

//https://leetcode.com/problems/word-break-ii/submissions/

var wordBreak = function (word, wordDict) {
    let set = new Set(wordDict);
    let result = [];
    let isBreak = (s, str) => {
        if (!s) {
            result.push(str.trim());
        }

        for (let i = 0; i < s.length; i++) {
            let sub = s.substring(0, i + 1);
            if (set.has(sub)) {
                isBreak(s.substring(i + 1), str + sub + " ");
            }
        }
    };

    isBreak(word, "");
    return result;
};

var wordBreak = function (s, wordDict) {
    let set = new Set(wordDict);
    let memo = {};

    const getCombinations = (word) => {
        if (!word) {
            return [""];
        }
        if (memo[word]) {
            return memo[word];
        }
        let result = [];
        for (let i = 0; i < word.length; i++) {
            let main = word.substring(0, i + 1);
            if (set.has(main)) {
                let rest = getCombinations(word.substring(i + 1));
                let fullWords = [];

                if (rest.length === 1 && rest[0] == "") {
                    fullWords = [main];
                } else {
                    fullWords = rest.map((item) => main + " " + item);
                }
                result = [...result, ...fullWords];
            }
        }
        memo[word] = result;
        return result;
    };
    return getCombinations(s);
};

// https://leetcode.com/problems/evaluate-reverse-polish-notation/submissions/
var evalRPN = function (tokens) {
    let stack = [];

    const isOperator = (op) => {
        return op == "+" || op == "-" || op == "*" || op == "/";
    };

    const getOPeration = (op, num1, num2) => {
        switch (op) {
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "/":
                return Math.trunc(num1 / num2);
            case "*":
                return num1 * num2;
        }
    };

    for (let token of tokens) {
        if (isOperator(token)) {
            let num2 = Number(stack.pop());
            let num1 = Number(stack.pop());
            let result = getOPeration(token, num1, num2);
            // console.log(num1,token ,num2+ "="+ result)
            stack.push(result);
        } else {
            stack.push(token);
        }
    }

    return stack[0];
};

//https://leetcode.com/problems/number-of-islands/submissions/

var numIslands = function (grid) {
    let visited = {};
    let rows = grid.length;
    let cols = grid[0].length;
    let count = 0;
    let traverse = (r, c) => {
        let key = r + "_" + c;
        if (
            r < 0 ||
            c < 0 ||
            c >= cols ||
            r >= rows ||
            grid[r][c] == "0" ||
            visited[key]
        ) {
            return;
        }

        visited[key] = true;
        traverse(r + 1, c);
        traverse(r, c + 1);
        traverse(r - 1, c);
        traverse(r, c - 1);
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] == "1" && !visited[i + "_" + j]) {
                traverse(i, j);
                count++;
            }
        }
    }
    return count;
};

// If left height == Right height - balanced tree
// 2^h-1 ans
// Else do recursively for left & right O(logn*logn)
var countNodes = function (root) {
    const getHeight = (node, side) => {
        if (!node) {
            return 0;
        }
        return 1 + getHeight(node[side], side);
    };

    const traverse = (node) => {
        const leftHeight = getHeight(node, "left");
        const rightHeight = getHeight(node, "right");
        if (leftHeight === rightHeight) {
            return Math.pow(2, leftHeight) - 1;
        }
        return 1 + traverse(node.right) + traverse(node.left);
    };
    return traverse(root);
};

//https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/submissions/
var lowestCommonAncestor = function (root, p, q) {
    if (!root) {
        return null;
    }
    if (root == p || root == q) {
        return root;
    }

    let foundInleft = lowestCommonAncestor(root.left, p, q);
    let foundInRight = lowestCommonAncestor(root.right, p, q);
    if (foundInleft && foundInRight) {
        // One found in left and other in right
        // It means - root is the common node
        return root;
    }

    // Either of the one is the common node
    return foundInleft || foundInRight;
};

var maxSlidingWindow = function (nums, k) {
    let queue = []; // Queue is stroring index
    // We maintain a queue that is always in the decaresing order
    // The left most elt in the queue will be the largest elt in the window
    let start = 0;
    let end = 0;
    let output = [];

    while (end < nums.length) {
        while (queue.length && nums[queue[queue.length - 1]] < nums[end]) {
            // Pop all smaller number - to maintain decreasing nature of queue
            queue.pop();
        }

        queue.push(end);

        if (end + 1 >= k) {
            // Meets the k-window for the first time
            // This loop will execute every other time after first
            output.push(nums[queue[0]]);
            start++;
        }

        if (queue[0] < start) {
            // If the first elt is out of bounds of the window
            queue.shift();
        }
        end++;
    }

    return output;
};
