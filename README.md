
# sentibag
[![package version](https://img.shields.io/npm/v/sentibag.svg?style=flat-square)](https://npmjs.org/package/sentibag)
[![package downloads](https://img.shields.io/npm/dm/sentibag.svg?style=flat-square)](https://npmjs.org/package/sentibag)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/sentibag.svg?style=flat-square)](https://npmjs.org/package/sentibag)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Simple sentiment analysis using bag of words model

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install sentibag
$ # OR
$ yarn add sentibag
```

## Usage

```js
import analyze from 'sentibag'
import afinn111 from 'afinn111-lexicon'

analyze('I love you', afinn111)
// { score: 3,
//     comparative: 3,
//     positive: { score: 3, words: [ 'love' ] },
//     negative: { score: 0, words: [] } }

```

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    