/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        if (lists == null || lists.length == 0) {
            return null;
        }
        Queue<ListNode> queue = new LinkedList<ListNode>();
        for (ListNode li: lists) {
            queue.offer(li);
        }
        while (!(queue.size() < 2)) {
            ListNode l1 = queue.poll();
            ListNode l2 = queue.poll();
            ListNode l3 = mergeLists(l1, l2);
            queue.offer(l3);
        }
        return queue.poll();
    }
    public ListNode mergeLists(ListNode l1, ListNode l2) {
        if (l1 == null) return l2;
        if (l2 == null) return l1;
        if (l1.val <= l2.val) {
            l1.next = mergeLists(l1.next, l2);
            return l1;
        } 
        l2.next = mergeLists(l1, l2.next);
        return l2;
    }
}
