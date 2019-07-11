/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
let helper = function(uncommon, word) {
    if (!uncommon[word]) uncommon[word] = 1
    else uncommon[word]++;
}
var uncommonFromSentences = function(A, B) {
    let wordsA = A.split(" ");
    let wordsB = B.split(" ");
    let uncommon = {};
    for (let i = 0; i < wordsA.length; i++) {
        helper(uncommon, wordsA[i]);
    }
    for (let i = 0; i < wordsB.length; i++) {
        helper(uncommon, wordsB[i]);
    }
    let uncommonWords = [];
    for (let w in uncommon) {
        if (uncommon[w] === 1) uncommonWords.push(w); 
    }
    return uncommonWords;
};
