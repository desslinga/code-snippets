/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    if (A.length <= 1) return true;
    let mode = 0;
    for (let i = 1; i < A.length; i++) {
        if (mode === 0) {
            if (A[i] > A[i - 1]) mode = 1;
            else if (A[i] < A[i - 1]) mode = 2;
        } else if (mode === 1 && (A[i] < A[i - 1])) return false;
        else if (mode === 2 && (A[i] > A[i - 1])) return false;
    }
    return true;
};
