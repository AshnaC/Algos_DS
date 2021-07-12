let s = "1010101";
let num = Number(s[0] + s[1]);
for (let i = 1; i < s.length - 1; i++) {
    let newNum = Number(s[i] + s[i + 1]);
    num = Math.max(newNum, num);
}
console.log(num);
