/**
 * @param {number} x
 * @return {number}
 */
let reverse = function(x) {
  let abs = parseInt((x.toString().split('').reverse().join('')));
  if (Math.abs(abs) >= (Math.pow(2, 31) - 1)) return 0;
  if (x < 0) return -abs;
  return abs;
};
