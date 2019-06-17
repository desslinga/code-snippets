/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    if (A.length === 0) return [];
    let firstLetters = A[0].split("");
    if (A.length === 1) return firstLetters;
    let strings = A.map(str => str.split(""));
    let commonChars = [];
    let flag = true;
    for (let i = 0; i < firstLetters.length; i++) {
        for (let j = 0; j < strings.length; j++) {
            let string = strings[j], index = 0;
            if ((index = string.indexOf(firstLetters[i])) !== -1) string.splice(index, 1);
            else flag = false;
        }
        if (flag) commonChars.push(firstLetters[i]);
        flag = true;
    }
    return commonChars;

};
