// https://www.youtube.com/watch?v=B1k_sxOSgv8

const encode = words => {
    let str = "";
    for (let word of words) {
        str = str + word.length + "#" + word;
    }
    return str;
};

const decode = str => {
    let left = 0;
    let right = 1;
    let arr = [];
    while (left < str.length) {
        if (str[right] != "#") {
            right++;
        }
        let count = Number(str.substring(left, right));
        let word = str.substring(right + 1, right + 1 + count);
        arr.push(word);
        left = right + 1 + count;
        right = left + 1;
    }
    return arr;
};

console.log(decode(encode(["hi", "sunsh#s3ine", "baby"])));

// Another delimiter along with length is required to handle more than 1 digit count
