//https://leetcode.com/problems/implement-trie-prefix-tree/submissions/

class Trie {
    constructor() {
        this.root = {};
    }
    /**
     * Inserts a word into the trie.
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root;
        for (let c of word) {
            if (!node[c]) {
                node[c] = {};
            }
            node = node[c];
        }
        node.isWord = true;
    }

    /**
     * Returns if the word is in the trie.
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this.root;
        for (let c of word) {
            if (node[c]) {
                node = node[c];
            } else {
                return false;
            }
        }
        return node.isWord || false;
    }

    /**
     * Returns if there is any word in the trie that starts with the given prefix.
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this.root;
        for (let c of prefix) {
            if (node[c]) {
                node = node[c];
            } else {
                return false;
            }
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
