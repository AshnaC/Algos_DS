class HashTable {
    constructor(size) {
        // Size to limit memory allocation
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            // Mod function to limit memory size
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        const address = this._hash(key);
        // Avoid collisions - Array of arrays
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
    }

    get(key) {
        const address = this._hash(key);
        if (this.data[address]) {
            for (let i = 0; i < this.data[address].length; i++) {
                if (this.data[address][i][0] === key) {
                    return this.data[address][i][1];
                }
            }
        }
    }

    keys() {
        let keyArr = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                for (let j = 0; j < this.data[i].length; j++) {
                    keyArr.push(this.data[i][j][0]);
                }
            }
        }
        return keyArr; //0(n) - Getting keys is expensive
    }
}

const hashTable = new HashTable(100);
hashTable.set("bill", "star");
hashTable.set("greg", "buty");
hashTable.get("bill");
hashTable.keys();
