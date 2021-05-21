function bubbleSort(arr) {
    const arrLen = arr.length - 1;
    for (let i = arrLen; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// bubbleSort([2,100,10,4,2,56346346])

function selectionSort(arr) {
    for (let j = 0; j < arr.length - 1; j++) {
        let smallest = a[j];
        let smallIndex = j;
        for (let i = j + 1; i < arr.length; i++) {
            if (arr[i] < smallest) {
                smallest = arr[i];
                smallIndex = i;
            }
        }
        [arr[j], arr[smallIndex]] = [arr[smallIndex], arr[j]];
        smallest = undefined;
    }
    return arr;
}

// selectionSort([2,56346346,100,10,4,2])

function InsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (arr[i] >= arr[j]) {
                // Insert to j+1 th position- push others
                if (i !== j + 1) {
                    arr.splice(j + 1, 0, arr[i]);
                    arr.splice(i + 1, 1);
                }
                break;
            }
        }
    }
    return arr;
}

InsertionSort([2, 100, 10, 4, 2, 9999]);

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }
    const half = Math.ceil(array.length / 2);
    const left = array.slice(0, half);
    const right = array.slice(half);
    // Split Array in into right and left

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    //Merge two sorted array
    let arr = [];
    let i = 0;
    let j = 0;
    while (i < left.length || j < right.length) {
        if (left[i] > right[j]) {
            arr.push(right[j]);
            j++;
        } else {
            arr.push(left[i]);
            i++;
        }
    }
    //Merge Remaining
    arr = [...arr, ...left.slice(i), ...right.slice(j)];
    return arr;
}

// const answer = mergeSort(numbers);
// console.log(answer);

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 10];

function quickSort(array, left, right) {
    if (left < right) {
        // console.log("left, right",left, right)
        let partitionIndex = partition(array, left, right);
        // console.log("partitionIndex",partitionIndex)
        quickSort(array, 0, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, right);
        // console.log("array", array)
        return array;
    }
}

function partition(array, start, end) {
    //Pivot as end of array
    const pivot = array[end];
    // Index to keep  track where swaping should be taken till now
    // That is point where <, > pivot is now
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
        if (array[i] < pivot) {
            // If less move elemt to left
            swap(array, i, pivotIndex);
            // [arr[i], arr[pivotIndex]] = [arr[pivotIndex],arr[i]]
            pivotIndex++;
        }
    }
    // console.log("pivotIndex", pivotIndex, end, arr)
    swap(array, end, pivotIndex);
    // console.log("array", array)
    return pivotIndex;
}

function swap(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

// Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);

// partition(numbers, 0, numbers.length - 1)
