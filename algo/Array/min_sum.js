// let arr = [4, 2, 5, 4, 3, 5, 1, 4, 2, 7]
// let count= 3
// let interval = 2
// let minVal = Infinity;

// function getMin() {
//     for (let i = 0; i < arr.length-(interval*(count-1)); i++){
//         let tmp = 0;
//         let sum = 0
//         for (let j = i; tmp < count; j=j+interval){
//             tmp++
//             sum = sum+ arr[j]
//         }
//         minVal = Math.min(sum, minVal)
//     }
//     return minVal;
// }

// console.log(getMin());

let arr = [4, 5, 3, 7];
let count = 0;
let small = true;

function isCorrectOrder(array) {
    let firstIter = true;
    let isIncreasing = false;
    for (let i = 0; i < array.length; i++) {
        if (firstIter) {
            if (array[i] < array[i + 1]) {
                isIncreasing = true;
            }
            firstIter = false;
        } else {
            if (isIncreasing) {
                if (i % 2 == 1 && array[i] > array[i - 1]) {
                } else if (i % 2 == 0 && array[i] < array[i - 1]) {
                } else {
                    return false;
                }
            } else {
                if (i % 2 == 1 && array[i] < array[i - 1]) {
                } else if (i % 2 == 0 && array[i] > array[i - 1]) {
                } else {
                    return false;
                }
            }
        }
    }
    return true;
}

function getStuff(tree) {
    if (isCorrectOrder(tree)) {
        return 0;
    }
    let count = 0;
    for (let i = 0; i < tree.length; i++) {
        let newArr = removeIndexElt(i, tree);
        if (isCorrectOrder(newArr)) {
            count++;
        }
    }
    if (count === 0) {
        return -1;
    } else {
        return count;
    }
}

function removeIndexElt(ind, arr) {
    let newArr = [...arr];
    newArr.splice(ind, 1);
    return newArr;
}
console.log(getStuff());
// console.log(getStuff([1, 2, 3, 4]));
// console.log(getStuff([1, 3, 1, 2]));

// console.log(isCorrectOrder(arr));
// console.log(isCorrectOrder([1, 2, 3, 4, 5]));
// console.log(isCorrectOrder([3, 4, 5, 3, 7]));
