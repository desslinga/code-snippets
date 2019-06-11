/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums === []) return 0;
    let u = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[u]) {
            u++;
            nums[u] = nums[i];
        }
    }
    return nums.length = u + 1;
};
