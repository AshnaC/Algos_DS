/**
 * Initialize your data structure here.
 */

//https://leetcode.com/problems/design-add-and-search-words-data-structure/submissions/
//https://www.youtube.com/watch?v=BTf05gs_8iU

var WordDictionary = function () {
    this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let node = this.root;
    for (let c of word) {
        if (!node[c]) {
            node[c] = {};
        }
        node = node[c];
    }
    node.isWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    const subSearch = (trie, index) => {
        let node = trie;
        for (let i = index; i < word.length; i++) {
            let c = word[i];
            if (c === ".") {
                // If dot we can match any char
                // so go through all children
                for (let key in node) {
                    const isFound = subSearch(node[key], i + 1);
                    if (isFound) {
                        return true;
                    }
                }
                return false;
            } else {
                if (node[c]) {
                    node = node[c];
                } else {
                    return false;
                }
            }
        }
        return node.isWord || false;
    };
    return subSearch(this.root, 0);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
