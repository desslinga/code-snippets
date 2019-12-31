class Solution {
    public List<String> topKFrequent(String[] words, int k) {
        /*
        This is the same idea as the top k frequent elements,
        instead of using a max heap we use a min heap.
        */
        //
        List<String> topWords = new ArrayList<String>();
        if (words == null || words.length == 0 || k == 0) return topWords;
        HashMap<String, Integer> freqs = new HashMap<String, Integer>();
        for (String word: words) {
            freqs.put(word, freqs.getOrDefault(word, 0) + 1);
        }
        // create a min heap to keep track of top k frequent words
        PriorityQueue<String> topElements = new PriorityQueue<String>(new Comparator<String>() {
           public int compare(String s1, String s2) {
               int compare = freqs.get(s1) - freqs.get(s2);
               if (compare == 0) return s2.compareTo(s1);
               return compare;
           } 
        });
        for (String key: freqs.keySet()) {
            topElements.offer(key);
            if (topElements.size() > k) {
                topElements.poll();
            }
        }
        // get all the elements from the heap
        while (!topElements.isEmpty()) {
            topWords.add(topElements.poll());
        }
        Collections.reverse(topWords);
        return topWords;
    }
}
