window.onload = function () {
    // const a = findCommonElements([1, 2, 3], ["1", "qweqwe", "ew"]);
    // const a = pairWithSum([1, 2, 3, 4, 5, 6], 10);
    // const a = experimentSet([1, 2, 3, 4, 5, 6], 10);

    // const arr = new MyArray();
    // arr.push("1");
    // arr.push("2");
    // arr.push("3");
    // arr.push("4");
    // arr.push("5");
    // arr.pop();
    // arr.delete(0);

    // const a = reverseString("baby YOda science");
    // const a = MergeSortedArray([1, 2, 4], [1, 10, 20]);
    // const a = targetSum([10, 2, 4, 5, 4, 5], 15);

    // const a = reverseArr([1, 2, 3, 4], 0, 3);
    const a = RotateArray([1, 2, 3, 4, 34, 534, 1], 3);

    console.log(a);
};

function findCommonElements(a, b) {
    let map = {};
    for (let i of a) {
        map[i] = true;
    }
    for (let i of b) {
        if (map[i]) {
            return true;
        }
    }
    return false;
    // a.some(elt => b.includes(elt));
}

function pairWithSum(arr, sum) {
    let obj = {};
    for (let i of arr) {
        if (obj[i]) {
            return [i, sum - i];
        } else {
            obj[sum - i] = true;
        }
    }
    return false;
}

//Set

function experimentSet(arr, sum) {
    let set = new Set();
    for (let elt of arr) {
        if (set.has(elt)) {
            return [elt, sum - elt];
        } else {
            set.add(sum - elt);
        }
    }
    return false;
}

// Define Array

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        this.length--;
        return item;
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
    }
}

function reverse(str) {
    const arr = str.split("");
    const arrLen = arr.length;
    for (let i = 0; i < arrLen / 2; i++) {
        let first = arr[i];
        arr[i] = arr[arrLen - 1 - i];
        arr[arrLen - 1 - i] = first;
    }

    return arr.join("");
}

function reverseString(str) {
    const totalLen = str.length - 1;
    let revArr = [];
    for (let i = totalLen; i >= 0; i--) {
        revArr[i] = str[totalLen - i];
    }
    return revArr.join("");
}

const reverse2 = str => [...str].reverse().join("");

function MergeSortedArray(arr1, arr2) {
    // MergeSortedArray([1, 2, 4], [1, 10, 20]);
    let arr3 = [];
    const len1 = arr1.length; //3
    const len2 = arr2.length; //3
    let i = 0;
    let j = 0;

    while (i < len1 && j < len2) {
        const elt1 = arr1[i]; //1
        const elt2 = arr2[j]; //1//2
        if (elt1 < elt2) {
            arr3.push(elt1);
            i++; //1//2
        } else {
            arr3.push(elt2);
            j++; //0//1
        }
        if (i == len1) {
            arr3 = [...arr3, ...arr2.slice(j)];
        } else if (j == len2) {
            arr3 = [...arr3, ...arr1.slice(i)];
        }
    }
    return arr3;
}

function targetSum(nums, target) {
    let obj = {};
    let i = 0;

    for (let item of nums) {
        if (obj[item]) {
            return [obj[item].i, i];
        }
        obj[target - item] = { i };
        i++;
    }
    return false;
}

var maxSubArray = function (nums) {
    let maxSum = nums[0];
    let sum = maxSum;
    for (let i = 1; i < nums.length; i++) {
        sum = sum + nums[i];
        if (sum < nums[i]) {
            sum = nums[i];
        }
        if (sum > maxSum) {
            maxSum = sum;
        }
    }
    return maxSum;
};

const maxSubArray2 = arr => {
    let max = arr[0];
    let maxSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        // Reset
        maxSum = Math.max(maxSum + arr[i], arr[i]);
        max = Math.max(maxSum, max);
    }
    return max;
};

// maxSubArray([10, -3, 1, 1]);

var moveZeroes = function (nums) {
    let idx = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[idx] = nums[i];
            if (idx !== i) {
                nums[i] = 0;
            }
            idx = idx + 1;
        }
    }
    return nums;
};

var containsDuplicate = function (nums) {
    let obj = {};
    for (let i of nums) {
        if (obj[i]) {
            return true;
        }
        obj[i] = true;
    }
    return false;
};

// var containsDuplicate = function(nums) {
//     const set = new Set(nums)
//     return set.size < nums.length

// };

function RotateArray(arr, k) {
    // Take k as modulus if k>n
    k = k % arr.length;
    reverseArr(arr, 0, arr.length - 1);
    reverseArr(arr, 0, k - 1);
    reverseArr(arr, k, arr.length - 1);
    return arr;

    // [1,2,3,4,5] => k=2=> [4,5,1,2,3]
    // Reverse first array [5,4,3,2,1]
    // Reverse upto first k [4,5,3,2,1]
    // Reverse remaining n-k
}

function reverseArr(arr, start, end) {
    while (end > start) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr;
}

function findFirstDuplicate(arr) {
    let arrMap = {};
    for (let i of arr) {
        if (arrMap[i]) {
            return i;
        }
        arrMap[i] = true;
    }
    return "No Duplicate";
}

var frequencySort = function (s) {
    let charMap = s.split(" ").reduce((val, acc) => (acc[val] = acc[value]));
};
