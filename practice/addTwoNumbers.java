/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        // trying to do an interative solution
        // create tempHead so that we don't 
        // have to worry about linked list base case
        ListNode tempHead = new ListNode(0);
        ListNode l1Point = l1;
        ListNode l2Point = l2;
        // we can go directly to curr.next
        // don't have to check if curr == null
        ListNode curr = tempHead;
        int carry = 0;
        // keep going while you still have elements
        // in both the linked lists
        while (l1Point != null || l2Point != null) {
            // get the values from the two arrays (if any)
            int l1Val = (l1Point == null ? 0 : l1Point.val);
            int l2Val = (l2Point == null ? 0 : l2Point.val);
            // as per elementary addition, add the values 
            // and the carry from previous (if any)
            int sum = l1Val + l2Val + carry;
            // remember that carry is either 1 or 0
            carry = sum / 10;
            // the sum for current place value is taken
            // from the mod. we are appending the result 
            // list to the front. the head is at the 
            // smallest place value.
            curr.next = new ListNode(sum % 10);
            curr = curr.next;
            // ipdate pointers if any
            l1Point = (l1Point == null ? null : l1Point.next);
            l2Point = (l2Point == null ? null : l2Point.next);
        }
        if (carry > 0) {
            ListNode last = new ListNode(carry);
            curr.next = last;
        }
        return tempHead.next;
    }
}
