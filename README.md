# Algorithmic Complexity project

A timing framework and custom algorithms to experiment with algorithmic complexity, designing for efficiency at scale.

## Technologies

- Node.js
- Jest

## Getting started

1. clone this repository
2. run `brew install node`
3. edit index.js to run the algorithm you would like to time (see below)
4. run `node index.js`

## Useage 

This project consists of a timing framework to time custom algorithms I have written to understand algorithmic complexity.

The timing framework runs a timer on a specified algorithm with the following options: 
- start/increment size: e.g. array size will start at 5000 and increase by 5000
- max size:final array size
- nb of timer runs for each array size: default 50, reduce value for more complex algorithms
- array type: 'string', 'integer', default 'integer'

Results are printed in the terminal and as a csv file in /results. 

To run the timing framework you should alter the function accordingly in 'index.js' and run the file in node.

```
node index.js
```
**How to run a timer**
1. Open index.js in your text editor
2. Uncomment desired algorithm (ln 6-10)
3. Alter `performanceCheck` arguments on ln 12
4. Add csv filename on ln 14 if desired - default: 'results'
5. Run `node index.js` in the terminal

**Example code**

```
//index.js
const TimerFramework = require('./js/performance/TimerFramework')
const consoleResults = require('./js/helpers/console')
const writeToCSV = require('./js/helpers/csv')

const findDuplicates = require('./js/algorithms/findDuplicates')

const performanceCheck = new TimerFramework(findDuplicates, 10000, 100000, 10, 'string')
consoleResults(performanceCheck)
writeToCSV(performanceCheck, 'findDuplicates')
```

## Algorithms

My custom algorithms can be found in '/js/algorithms':

### Reverse

Reverses an array in place.
code => reverse(arr)


### Shuffle

Randomly shuffles each value in an array.
code => shuffle(arr)


### Find Duplicates

Given a list of words, find all words that appear more than once.
code => findDuplicates(arr)

Working models of each of the above in '/js/algorithms/working' to enable me to log improvements in efficiency.

## Sort

In progress
