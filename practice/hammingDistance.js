let hammingDistance = function(x, y) {
    const bitX = x.toString(2);
    const bitY = y.toString(2);
    const bitLarger = (x >= y ? bitX : bitY);
    let sum = 0;
    for (let i = bitLarger.length - 1; i >= 0; i--) {
      sum += (bitX[i] != bitY[i]);
      console.log(bitX[i], bitY[i], "ok", bitX[i] != bitY[i], sum);
    }
    console.log(bitX, bitY, sum);
    return sum;
};

hammingDistance(14,4);
