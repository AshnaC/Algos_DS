// https://leetcode.com/problems/word-search-ii/submissions/
// https://www.youtube.com/watch?v=asbcE9mZz_U

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

// Make a Trie of word
// Go to each cell of the given board
// Go left right top bottom and see if the word made matches trie
// To ensure each cell visited only once during a word - maintain visit map

class Trie {
    constructor() {
        this.root = {};
    }

    addWord(word) {
        let node = this.root;
        for (let c of word) {
            if (!node[c]) {
                node[c] = {};
            }
            node = node[c];
        }
        node.isWord = true;
    }
}

var findWords = function (board, words) {
    const trie = new Trie();
    for (let word of words) {
        trie.addWord(word);
    }

    let len = board.length;
    let height = board[0].length;
    let visted = {};
    // Avoid duplicates
    let result = new Set();

    // Visted is to keep track of all nodes vsited in one path
    // We can only vist a node once in a path
    // After that path is vsited, we remove the value from that visted
    const dfs = (row, col, node, word) => {
        // Outlier conditions - Just return
        if (row < 0 || col < 0 || row >= len || col >= height || visted[col + "_" + row]) {
            return;
        }

        let char = board[row][col];
        if (node[char]) {
            visted[col + "_" + row] = true;
            word = word + char;
            if (node[char].isWord) {
                result.add(word);
            }
            dfs(row + 1, col, node[char], word);
            dfs(row - 1, col, node[char], word);
            dfs(row, col + 1, node[char], word);
            dfs(row, col - 1, node[char], word);
            visted[col + "_" + row] = false;
        } else {
            return;
        }
    };
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < height; j++) {
            dfs(i, j, trie.root, "");
        }
    }
    return [...result];
};

// Make a Trie of word
// Go to each cell of the given board
// Go left right top bottom and see if the word made matches trie
// To ensure each cell visited only once during a word - maintain visit map

class Trie {
    constructor() {
        this.root = {};
    }

    addWord(word) {
        let node = this.root;
        for (let c of word) {
            if (!node[c]) {
                node[c] = {};
            }
            node = node[c];
        }
        node.word = word; // Instead of boolean - word itself act as the flag
    }
}

var findWords = function (board, words) {
    const trie = new Trie();
    for (let word of words) {
        trie.addWord(word);
    }

    let len = board.length;
    let height = board[0].length;
    let result = new Set();

    // board[row][col] == "$" is to keep track of all nodes vsited in one path
    // We can only vist a node once in a path
    // After that path is vsited, we remove the value from that visted

    const dfs = (row, col, node) => {
        // Outlier conditions - Just return
        if (row < 0 || col < 0 || row >= len || col >= height || board[row][col] == "$") {
            return;
        }

        let char = board[row][col];
        if (node[char]) {
            board[row][col] = "$";
            if (node[char].word) {
                result.add(node[char].word);
            }
            dfs(row + 1, col, node[char]);
            dfs(row - 1, col, node[char]);
            dfs(row, col + 1, node[char]);
            dfs(row, col - 1, node[char]);
            board[row][col] = char;
        } else {
            return;
        }
    };
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < height; j++) {
            dfs(i, j, trie.root);
        }
    }
    return [...result];
};
