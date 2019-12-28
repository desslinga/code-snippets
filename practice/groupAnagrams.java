class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        /*
        So I'll keep track of which strings are anagrams of each 
        other using a hashmap of string arrays. I'll use the fact
        that two strings are anagrams if their sorted versions 
        (sorting the characters) are the same. In the hashmap, I 
        will have the key as a sorted string, and then it's mapped
        to a list of anagrams for that string we've found so far
        */
        List<List<String>> anagrams = new ArrayList<List<String>>();
        if (strs == null || strs.length == 0) return anagrams;
        HashMap<String, List<String>> anagramLists = new HashMap<String, List<String>>();
        for (String str: strs) {
            char[] sortedChars = str.toCharArray();
            Arrays.sort(sortedChars);
            String sorted = new String(sortedChars);
            List<String> anagramList = anagramLists.get(sorted);
            // didn't find sorted string in hashmap
            if (anagramList == null) {
                anagramList = new ArrayList<String>();
            }
            anagramList.add(str);
            anagramLists.put(sorted, anagramList);
        }
        // creating the list of anagrams
        for (String key: anagramLists.keySet()) {
            anagrams.add(anagramLists.get(key));
        }
        return anagrams;
    }
}
