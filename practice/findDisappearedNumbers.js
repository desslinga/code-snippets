/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let disappeared = [];
    for (let i = 1; i < nums.length + 1; i++) {
        if (!nums.includes(i)) disappeared.push(i);
    }
    return disappeared;
};
