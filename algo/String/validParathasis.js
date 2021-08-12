//https://leetcode.com/problems/valid-parentheses/submissions/

var isValid = function (s) {
    let stack = [];

    for (let c of s) {
        switch (c) {
            case "{":
                stack.push("}");
                break;
            case "[":
                stack.push("]");
                break;
            case "(":
                stack.push(")");
                break;
            default:
                let brace = stack.pop();
                if (brace !== c) {
                    return false;
                }
        }
    }
    return stack.length === 0;
};
