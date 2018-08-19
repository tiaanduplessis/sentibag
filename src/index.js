
function stripPunctuation (str = '') {
  return str.replace(/[.,-/#!$%^&*;:{}=\-_`~()@+?><[\]+]/g, '').replace(/\s{2,}/g, ' ')
}

function tokenize (str = '') {
  return str.toLowerCase().split(' ')
}

function analyze (str = '', lexicon = []) {
  if (!str || typeof str !== 'string') {
    throw new Error('No string provided to analyze')
  }

  const tokens = tokenize(stripPunctuation(str))
  let positive = {
    score: 0,
    words: []
  }
  let negative = {
    score: 0,
    words: []
  }

  tokens.forEach(token => {
    if (lexicon[token] !== undefined) {
      if (lexicon[token] > 0) {
        positive.score += lexicon[token]
        positive.words.push(token)
      } else {
        negative.score += lexicon[token]
        negative.words.push(token)
      }
    }
  })

  return {
    score: positive.score + negative.score,
    comparative: getComparative(positive) - getComparative(negative),
    positive,
    negative
  }
}

function getComparative ({score, words} = {}) {
  if (score !== 0 && words.length) {
    return score / words.length
  }

  return 0
}

export default analyze
