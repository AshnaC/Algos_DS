function factorial(n) {
    if (n !== 1) {
        return n * factorial(n - 1);
    }
    return 1;
}
// factorial(12)

function fibnocciIter(n) {
    let first = 0;
    let second = 1;
    let third = second;
    for (let i = 2; i <= n; i++) {
        third = first + second;
        first = second;
        second = third;
    }
    return third;
}

// fibnocciIter(6)

function fibnocciRecurse(n) {
    //(O(2^n))
    if (n <= 1) {
        return n;
    }
    const elt = fibnocciRecurse(n - 1) + fibnocciRecurse(n - 2);
    return elt;
}

fibnocciRecurse(40);

function fibSeries(n) {
    if (n === 1) {
        return [0, 1];
    }
    let arr = fibSeries(n - 1);
    // console.log('arr', arr)
    arr = [...arr, arr[n - 1] + arr[n - 2]];
    return arr;
}

// fibSeries(43)

function reverseString(str) {
    const half = Math.floor(str.length / 2);
    const len = str.length;
    let arr = [];
    for (let i = 0; i <= half; i++) {
        [arr[i], arr[len - 1 - i]] = [str[len - 1 - i], str[i]];
    }
    return arr.join("");
}

// reverseString('bill clinton')

function reverseRecurse(str) {
    if (str == "") return "";
    return reverseRecurse(str.substr(1)) + str[0];
}

reverseRecurse("hello");
