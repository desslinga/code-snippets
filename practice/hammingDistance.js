let hammingDistance = function(x, y) {
    const bitX = x.toString(2);
    const bitY = y.toString(2);
    const bitLarger = (x >= y ? bitX : bitY);
    let bitSmaller = (x >= y ? bitY : bitX);
    const bitDiff = Math.abs(bitLarger.length - bitSmaller.length);
    if (bitDiff != 0) bitSmaller = ("0".repeat(bitDiff)).concat(bitSmaller);
    let sum = 0;
    for (let i = 0; i < bitLarger.length; i++) {
      sum += bitLarger[i] !== bitSmaller[i];
    }
    return sum;
};

let hammingDistanceAlt = function(x, y) {
  return (x ^ y)
    .toString(2)
    .split('')
    .reduce((sum, curr) => sum += curr === '1', 0);
}
