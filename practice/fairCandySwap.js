/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    let sizeA = A.reduce((p, s) => p + s, 0);
    let sizeB = B.reduce((p, s) => p + s, 0);
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if ((sizeA - A[i] + B[j]) === (sizeB + A[i] - B[j])) return [A[i], B[j]];
        }
    }
};
