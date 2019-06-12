/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    return S.split('').reduce((total, s) => {
        if (J.includes(s)) total++;
        return total;
    }, 0);
};
