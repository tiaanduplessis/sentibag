import analyze from 'sentibag'
import afinn111 from 'afinn111-lexicon'

analyze('I love you', afinn111)
// { score: 3,
//     comparative: 3,
//     positive: { score: 3, words: [ 'love' ] },
//     negative: { score: 0, words: [] } }
