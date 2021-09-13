var productExceptSelf = function (nums) {
    let leftProd = [];
    let rightProd = [];
    let tillProduct = 1;
    for (let i = 0; i < nums.length; i++) {
        leftProd[i] = tillProduct;
        tillProduct = tillProduct * nums[i];
    }

    tillProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        rightProd[i] = tillProduct;
        tillProduct = tillProduct * nums[i];
    }
    let newArr = [];
    for (let i = 0; i < nums.length; i++) {
        newArr[i] = leftProd[i] * rightProd[i];
    }
    return newArr;
};

console.log(productExceptSelf([4, 5, 6, 2, 0]));

var productExceptSelf1 = function (nums) {
    let res = [];
    let prod = 1;
    for (let i = 0; i < nums.length; i++) {
        res[i] = prod;
        prod = prod * nums[i];
    }
    prod = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] = prod * res[i];
        prod = prod * nums[i];
    }
    return res;
};

var productExceptSelf = function (nums) {
    let leftProduct = [1];

    for (let i = 0; i < nums.length - 1; i++) {
        leftProduct[i + 1] = leftProduct[i] * nums[i];
    }

    let product = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        leftProduct[i] = product * leftProduct[i];
        product = product * nums[i];
    }

    return leftProduct;
};