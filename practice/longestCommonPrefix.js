/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function(strs) {
    let endIndex = 0, foundPrefix = false;
    const startLet = strs[0];
    if (strs.length === 0) return "";
    if (strs.length === 1) return startLet;
    while (!foundPrefix) {
      for (let i = 0; i < strs.length; i++) {
        const compLet = strs[i][endIndex];
        if (foundPrefix = strs[i] === ""
          || (startLet[endIndex] !== compLet)
          || !compLet) break;
      }
      endIndex++;
    }
    return strs[0].substring(0, endIndex - 1);
};
