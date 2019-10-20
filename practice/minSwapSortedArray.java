import java.lang.Math;

class Solution {
    public int helper(int[] nums, int l, int r) {
        // one element
        if (l == r) {
            return nums[l];
        } else {
            // when getting floor, convert to int
            // however, if looking for float, ideally do double
            // float gives you less precision than doubles.
            // get the mid 
            int mid = (int) Math.floor((l + r) / 2);
            return (int) Math.min(helper(nums, l, mid), helper(nums, mid + 1, r));
        }
        
    }
    public int findMin(int[] nums) {
        // base case, length = 1, or array is originally sorted
        if (nums.length == 1 || nums[0] <= nums[nums.length - 1]) {
            return nums[0];
        } else {
            return helper(nums, 0, nums.length - 1);
        }
    }
}
