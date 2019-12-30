class Solution {
    public boolean containsDuplicate(int[] nums) {
        /*
        The way to approach this is to keep a hashmap
        of all the numbers you've seen so far, and 
        then loop through all the numbers. For each 
        number you check if you've seen it before, 
        and if so, then return false. And if you reach
        the end, return true
        */
        // base case
        if (nums == null || nums.length == 0) return false;
        HashMap<Integer, Integer> seen = new HashMap<Integer, Integer>();
        // loop through all the numbers
        for (int i = 0; i < nums.length; i++) {
            // we have seen this element before
            Integer newInt = new Integer(nums[i]);
            if (seen.containsKey(newInt)) return true;
            seen.put(newInt, newInt);
        }
        // we didn't encounter any elements we've seen before
        return false;
    }
}
