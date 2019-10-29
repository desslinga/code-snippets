class Solution {
    public static int expand(String s, int l, int r) {
        int left = l;
        int right = r;
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }
        return right - left - 1;
    }
    public static int maxPalindromic(String str) {
        if (str.length() < 1) {
            return 0;
        }
        int begin = 0;
        int end = 0;
        for (int i = 0; i < str.length(); i++) {
            int oddP = expand(str, i, i);
            int evenP = expand(str, i, i+1);
            int opt = Math.max(oddP, evenP);
            if (opt > end - begin) {
                begin = i - (opt - 1) / 2;
                end = i + opt / 2;
            }
        }
        return end - begin + 1;
    }
}
