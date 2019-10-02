/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let curr_largest = nums[0];
    let curr_smallest = nums[0];
    let largest = curr_largest;
    
    if (nums.length === 1) return curr_largest;
    for (let i = 1; i < nums.length; i++) {
        let largest_mult = curr_largest * nums[i]
        let smallest_mult = curr_smallest * nums[i];
        curr_largest = Math.max(largest_mult, smallest_mult, nums[i]);
        curr_smallest = Math.min(largest_mult, smallest_mult, nums[i]);
        largest = Math.max(curr_largest, largest);
    }
    return largest;
    
};
