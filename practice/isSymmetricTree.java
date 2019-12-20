/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public boolean isSymmetric(TreeNode root) {
        return root == null || isSameTree(root.left, root.right);
    }
    public boolean isSameTree(TreeNode left, TreeNode right) {
        if (left == null && right == null) return true;
        if (left == null || right == null) return false;
        if (left.val == right.val) {
            // check if left subtree of left is same as right subtree of right
            // and if left subtree of right is same as right subtree of left.
            return (isSameTree(left.left, right.right) && isSameTree(right.left, left.right));
        }
        return false;
    }
}
