var reverse = function (x) {
    let rev = 0;
    num = Math.abs(x);
    while (num) {
        digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10);
    }
    if (rev > 2 ** 31) {
        return 0;
    }
    let sign = x > 0 ? 1 : -1;
    return sign * rev;
};
