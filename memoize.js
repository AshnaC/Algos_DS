function add() {
    let cache = {};
    return function (n) {
        if (cache[n]) {
            return cache[n];
        }
        console.log("Operation");
        cache[n] = n + 30;
        return cache[n];
    };
}

const addFn = add();

// addFn(4)
// addFn(4)
// addFn(4)

function fibNocci() {
    let arr = [0, 1];
    return function fib(n) {
        if (arr[n] || n === 0) {
            return arr[n];
        } else {
            // while(arr.length < n+1){
            // arr.push(arr[arr.length-1]+arr[arr.length-2])
            // }
            arr.push(fib(n - 1) + fib(n - 2));
            return arr[n];
        }
    };
}

const f = fibNocci();
// f(3)
f(143);
console.log(calc);

function finReccur(n) {
    if (n < 2) {
        return n;
    }
    return finReccur(n - 1) + finReccur(n - 2);
}

// https://leetcode.com/problems/house-robber/

// const robbing = nums => {
//     let max2 = nums[0];
//     let max1 = Math.max(nums[0], nums[1]);
//     for (let i = 2; i < nums.length; i++) {
//         const newMax = Math.max(nums[i] + max2, max1);
//         max2 = max1;
//         max1 = newMax;
//     }
//     console.log(max1, max2);
// };

function rob(nums) {
    let cache = [];
    function robbing(nums, n) {
        if (cache[n]) {
            return cache[n];
        }
        if (n < 0) {
            return 0;
        }
        const value = Math.max(robbing(nums, n - 2) + nums[n], robbing(nums, n - 1));
        cache.push(value);
        console.log(cache);
        return value;
    }
    return robbing(nums, nums.length - 1);
}

// const robbing = nums => {
//     return rob(nums, nums.length - 1);
// };
// const rob = (nums, n) => {
//     if (n < 0) {
//         return 0;
//     }
//     return Math.max(rob(nums, n - 2) + nums[n], rob(nums, n - 1));
// };

const a = rob([100, 101, 1, 100, 2, 500]);
console.log(a);
